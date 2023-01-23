import Image from "next/image";
import React from "react";
import LoginForm from "./auth/components";

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="w-5/12 h-screen p-3 bg-ku-beige hidden lg:flex md:justify-center md:items-center">
        <Image src="/emblem.svg" width={378} height={534.58} alt="emblem" />
      </div>
      <div className="w-full lg:w-7/12 p-8 md:p-32 lg:p-6 xl:p-16 h-screen bg-ku-crimson flex justify-center items-center">
        <div className="w-full lg:w-10/12 xl:w-9/12 flex flex-col justify-center items-start">
          <h3 className="text-2xl md:text-4xl md:mb-2 font-semibold text-white">
            BlackBoard에 로그인하세요
          </h3>
          <p className="text-lg md:text-2xl text-white">학습관리시스템</p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
