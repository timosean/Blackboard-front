"use client";

import { useFetchMyInfo } from "@/hooks/queries/user";

export default function MyPage() {
  const { data } = useFetchMyInfo();

  return <div className="w-full h-[107px] bg-pink">{JSON.stringify(data)}</div>;
}
