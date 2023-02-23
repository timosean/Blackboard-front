"use client";

import { FadeLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <FadeLoader
        radius={5}
        loading={true}
        color={"rgba(0, 0, 0, 0.8"}
        speedMultiplier={4}
      />
    </div>
  );
}
