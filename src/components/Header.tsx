"use client";

import { AppDispatch } from "@/store/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { open } from "@/store/reducer/sidebarSlice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="w-full h-[3.5rem] px-4 bg-ku-crimson text-white font-bold flex justify-center items-center lg:hidden">
      <span onClick={() => dispatch(open())}>
        <GiHamburgerMenu fill="white" size={24} />
      </span>
      <div className="w-full flex justify-center mr-[23.43px]">
        학습관리시스템
      </div>
    </header>
  );
}
