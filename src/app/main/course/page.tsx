"use client";

import { useCheckLoginStatus } from "@/hooks/queries/user";
import { GoPlus } from "react-icons/go";

function AddCourseButton() {
  return (
    <button className="w-30 h-10 px-4 flex items-center space-x-1 rounded bg-ku-crimson text-white font-bold hover:bg-hover-crimson">
      <GoPlus size={20} />
      <span>강의 개설</span>
    </button>
  );
}

export default function MyCourse() {
  const user = useCheckLoginStatus();

  return (
    <div className="w-full">
      <h1 className="text-3xl h-[105px] flex items-center font-bold border-b-4">
        나의 코스
      </h1>
      <div
        className={`w-full mt-6 ${
          user?.userJob === "professor" ? "flex" : "hidden"
        } items-center justify-start`}
      >
        <AddCourseButton />
      </div>
    </div>
  );
}
