"use client";

import { useQuery } from "@tanstack/react-query";
import { useFetchMyInfo } from "@/hooks/queries/user";

export default function MyPage() {
  const { data } = useFetchMyInfo();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}
