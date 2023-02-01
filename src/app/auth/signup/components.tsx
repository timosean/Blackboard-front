"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";
import { HiOutlineIdentification } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";
import { signUpAPI } from "@/apis/api/user";

export interface FormValues {
  userName: string;
  userID: string;
  password: string;
  idNum: string;
  userJob: string;
}

export default function SignUpForm() {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [job, setJob] = useState<string>("student");
  const router = useRouter();

  useEffect(() => {
    setValue("userJob", "student");
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signUpAPI(data)
      .then((res) =>
        alert("회원가입이 완료되었습니다!\n로그인 페이지로 이동합니다.")
      )
      .then(() => router.push("/auth/login"));
  };

  return (
    <form
      className="mt-8 w-full flex flex-col"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex mb-8">
        <button
          type="button"
          className={`w-1/2 p-3 text-center text-white rounded transition-all lg:text-lg font-bold ${
            job === "student" ? "bg-[#470111]" : "bg-transparent"
          }`}
          onClick={() => {
            setJob("student");
            setValue("userJob", "student");
          }}
        >
          학생 회원가입
        </button>
        <button
          type="button"
          className={`w-1/2 p-3 text-center text-white rounded transition-all lg:text-lg font-bold ${
            job === "student" ? "bg-transparent" : "bg-[#470111]"
          }`}
          onClick={() => {
            setJob("professor");
            setValue("userJob", "professor");
          }}
        >
          교수 회원가입
        </button>
      </div>
      <div className="relative w-full">
        <span className="absolute left-1 top-1 md:top-3.5">
          <IoPersonOutline size={20} style={{ stroke: "white" }} />
        </span>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="w-full h-8 md:h-12 pl-10 pr-3 text-sm md:text-lg mb-3 bg-transparent outline-none border-b border-b-white text-white placeholder:text-white/70"
          {...register("userName", { required: true })}
        />
      </div>
      <div className="relative w-full">
        <span className="absolute left-1 top-1 md:top-3.5">
          <BsPersonCheck size={22} style={{ fill: "white" }} />
        </span>
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          className="w-full h-8 md:h-12 pl-10 pr-3 text-sm md:text-lg mb-3 bg-transparent outline-none border-b border-b-white text-white placeholder:text-white/70"
          {...register("userID", { required: true })}
        />
      </div>
      <div className="relative w-full">
        <span className="absolute left-1 top-1 md:top-3.5">
          <IoLockClosedOutline size={20} style={{ stroke: "white" }} />
        </span>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full h-8 md:h-12 pl-10 pr-3 text-sm md:text-lg mb-3 bg-transparent outline-none border-b border-b-white text-white placeholder:text-white/70"
          {...register("password", { required: true })}
        />
      </div>
      <div className="relative w-full">
        <span className="absolute left-1 top-1 md:top-3.5">
          <HiOutlineIdentification size={20} style={{ stroke: "white" }} />
        </span>
        <input
          type="text"
          placeholder="학번(사번)을 입력하세요"
          className="w-full h-8 md:h-12 pl-10 pr-3 text-sm md:text-lg mb-6 bg-transparent outline-none border-b border-b-white text-white placeholder:text-white/70"
          {...register("idNum", { required: true })}
        />
      </div>
      <div className="hidden">
        <input type="hidden" {...register("userJob")} />
      </div>
      <button
        className="w-full p-3 text-white rounded bg-dark-gray text-sm md:text-base font-bold"
        type="submit"
      >
        가입하기
      </button>
    </form>
  );
}
