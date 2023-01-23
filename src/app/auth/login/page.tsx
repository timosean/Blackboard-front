import React from "react";
import LoginForm from "./components";

export default function LoginPage() {
  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-4xl md:mb-2 font-semibold text-white">
        BlackBoard에 로그인하세요
      </h3>
      <p className="text-lg md:text-2xl text-white">학습관리시스템</p>
      <LoginForm />
    </div>
  );
}
