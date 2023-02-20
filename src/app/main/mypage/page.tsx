"use client";

import { useQueryClient } from "@tanstack/react-query";

export default function MyPage() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["user"]);

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}
