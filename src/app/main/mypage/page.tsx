"use client";

import { useCheckLoginStatus } from "@/hooks/queries/user";

export default function MyPage() {
  const user = useCheckLoginStatus();

  return <div className="w-full h-[107px] bg-pink">{JSON.stringify(user)}</div>;
}
