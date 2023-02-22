"use client";

import { AiOutlineGlobal } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { BiLogOutCircle } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { logOutAPI } from "@/apis/api/user";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";

function MenuItemWrapper({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div
      className={`w-full h-12 pl-3 flex items-center text-white space-x-3 ${
        isActive ? "border-l-4 border-white bg-hover-crimson" : ""
      } hover:bg-hover-crimson hover:cursor-pointer transition-[background]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function Sidebar() {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <nav
      className={`w-[12.5rem] h-screen bg-ku-crimson flex flex-col items-start space-y-1 absolute ${
        isOpen ? "left-0" : "-left-[12.5rem]"
      } lg:static transition-all ease-[cubic-bezier(0.55, 0, 0.1, 1)] duration-500`}
    >
      <div className="w-full h-[105px] flex items-center justify-center text-white text-xl font-bold border-b-4 border-dark-gray">
        학습관리시스템
      </div>
      <Link className="w-full" href="/main/mypage">
        <MenuItemWrapper href="/main/mypage">
          <RxPerson size={30} />
          <span className="text-sm">내 정보</span>
        </MenuItemWrapper>
      </Link>
      <Link className="w-full" href="/main">
        <MenuItemWrapper href="/main">
          <AiOutlineGlobal size={30} />
          <span className="text-sm">활동 스트림</span>
        </MenuItemWrapper>
      </Link>
      <Link className="w-full" href="/main/course">
        <MenuItemWrapper href="/main/course">
          <ImBook size={28} />
          <span className="text-sm">코스</span>
        </MenuItemWrapper>
      </Link>
      <Link className="w-full" href="/main/sugang">
        <MenuItemWrapper href="/main/sugang">
          <GoTasklist size={28} />
          <span className="text-sm">수강신청</span>
        </MenuItemWrapper>
      </Link>
      <MenuItemWrapper onClick={logOutAPI}>
        <BiLogOutCircle size={30} />
        <span className="text-sm">로그아웃</span>
      </MenuItemWrapper>
    </nav>
  );
}
