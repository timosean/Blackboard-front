import React from "react";
import SignUpForm from "./components";

export default function SignUp() {
  return (
    <div className="w-full">
      <h3 className="w-full text-center md:text-start text-2xl md:text-4xl md:mb-2 font-semibold text-white">
        회원가입
      </h3>
      <SignUpForm />
    </div>
  );
}
