"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMyInfo } from "@/apis/api/user";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";

export default function Home() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchMyInfo,
  });

  if (data) {
    queryClient.setQueryData(["user"], data);
    router.push("/main");
  } else router.push("/auth/login");

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <FadeLoader
          radius={5}
          loading={true}
          color={"rgba(0, 0, 0, 0.8"}
          speedMultiplier={4}
        />
      </div>
    </main>
  );
}
