"use client";

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { fetchMyInfo } from "@/apis/api/user";
import { User } from "@/interfaces/user";
import { AxiosError, AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 로그인 되어있는 사용자의 정보를 가져오는 훅
export const useFetchMyInfo = (
  options?: UseQueryOptions<
    AxiosResponse<User>,
    AxiosError,
    AxiosResponse<User>,
    ["user"]
  >
): UseQueryResult<AxiosResponse, AxiosError> =>
  useQuery(["user"], () => fetchMyInfo(), {
    ...options,
    staleTime: 300000,
  });

// 리로드 시 로그인 유지되게 하는 훅
export const useCheckLoginStatus = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
    else {
      alert("로그인이 필요한 서비스입니다.");
      router.push("/auth/login");
    }
  }, []);

  return user;
};
