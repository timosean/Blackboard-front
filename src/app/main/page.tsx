"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Main() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const data = queryClient.getQueryData(["user"]);
    console.log("hi");
    console.log(data);
  }, []);

  return <div>Main Page</div>;
}
