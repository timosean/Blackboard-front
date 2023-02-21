"use client";

import { useCheckLoginStatus } from "@/hooks/queries/user";

// 서버에서 데이터 받아오는 동안 비동기 처리 필요.
export default function MyPage() {
  const user = useCheckLoginStatus();

  return <div className="w-full h-[107px] bg-pink">{JSON.stringify(user)}</div>;
}
