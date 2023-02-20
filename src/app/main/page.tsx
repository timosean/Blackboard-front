"use client";

import { useFetchMyInfo } from "@/hooks/queries/user";

export default function Main() {
  const { data } = useFetchMyInfo();

  console.log(data);

  return <div>Main Page</div>;
}
