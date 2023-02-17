import { AiOutlineGlobal } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { BiLogOutCircle } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import Link from "next/link";

function MenuItemWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-12 pl-3 flex items-center text-white space-x-3 hover:bg-hover-crimson hover:cursor-pointer">
      {children}
    </div>
  );
}

export default function Sidebar() {
  return (
    <nav className="w-[12.5rem] h-screen bg-ku-crimson flex flex-col items-start space-y-1">
      <div className="w-full h-[105px] flex items-center justify-center text-white text-2xl font-bold border-b-4 border-dark-gray">
        학습관리시스템
      </div>
      <Link className="w-full" href="/main/mypage">
        <MenuItemWrapper>
          <RxPerson size={30} />
          <span className="text-sm">내 정보</span>
        </MenuItemWrapper>
      </Link>
      <MenuItemWrapper>
        <AiOutlineGlobal size={30} />
        <span className="text-sm">활동 스트림</span>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <ImBook size={28} />
        <span className="text-sm">코스</span>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <GoTasklist size={28} />
        <span className="text-sm">수강신청</span>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <BiLogOutCircle size={30} />
        <span className="text-sm">로그아웃</span>
      </MenuItemWrapper>
    </nav>
  );
}
