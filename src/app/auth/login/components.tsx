"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  id: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
        {...register("id")}
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
        <button
          className="w-[5.75rem] h-[2rem] md:h-[2.5rem] text-white rounded bg-dark-gray text-sm md:text-base font-bold"
          type="submit"
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
