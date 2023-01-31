"use client";

import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <FadeLoader
        radius={5}
        loading={true}
        color={"rgba(255, 255, 255, 0.8"}
        speedMultiplier={4}
      />
    </div>
  );
}
