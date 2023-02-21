"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import axiosInstance from "@/apis/utils";

interface FormValues {
  userID: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axiosInstance.post("/user/login", data);
      sessionStorage.setItem("user", JSON.stringify(response.data));
      if (response) window.location.href = "http://localhost:3000/main";
    } catch (e) {
      if (e.response.status === 401) alert("계정 정보를 다시 확인해주세요.");
      console.error(e);
    }
  };

  return (
    <form
      method="post"
      className="mt-8 w-full h-[12.5rem] flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        className="w-full h-8 md:h-12 rounded px-3 text-sm md:text-lg mb-3"
        {...register("userID")}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        className="w-full h-8 md:h-12 rounded px-3 text-sm md:text-lg mb-6"
        {...register("password")}
      />
      <div className="flex justify-start items-center space-x-3">
        <button className="w-[5.75rem] h-[2rem] md:h-[2.5rem] text-white rounded bg-dark-gray text-sm md:text-base font-bold">
          로그인
        </button>
        <Link href={"/auth/signup"}>
          <button
            className="w-[5.75rem] h-[2rem] md:h-[2.5rem] text-white rounded bg-dark-gray text-sm md:text-base font-bold"
            type="submit"
          >
            회원가입
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
