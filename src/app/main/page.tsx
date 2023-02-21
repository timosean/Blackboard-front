"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useFetchMyInfo } from "@/hooks/queries/user";

export default function Main() {
  const queryClient = useQueryClient();
  const { data } = useFetchMyInfo({
    onSuccess: (data) => queryClient.setQueryData(["user"], data),
  });

  console.log(data);

  return <div>Main Page</div>;
}
