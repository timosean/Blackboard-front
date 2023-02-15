"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchMyInfo } from "@/apis/api/user";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchMyInfo,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    queryClient.setQueryData(["user"], data);
    router.push("/main");
  }

  return <main className="w-full flex">홈페이지</main>;
}
