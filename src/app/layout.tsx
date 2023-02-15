"use client";

import "./globals.css";
import Providers from "@/redux/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers>
        <QueryClientProvider client={queryClient}>
          <body>{children}</body>
        </QueryClientProvider>
      </Providers>
    </html>
  );
}
