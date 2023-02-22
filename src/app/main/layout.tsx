"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { close } from "@/store/reducer/sidebarSlice";

export default function MenuList({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full h-screen relative lg:static lg:flex">
      <Sidebar />
      <div
        className={`w-full h-screen flex absolute lg:static transition-all ease-[cubic-bezier(0.55, 0, 0.1, 1)] duration-500 ${
          isOpen ? "left-[12.5rem]" : "left-0"
        }`}
      >
        <Header />
        <main
          className="w-full h-screen absolute top-[3.5rem] lg:static"
          onClick={() => dispatch(close())}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
