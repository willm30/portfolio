import React from "react";
import WaitingSpinner from "../icons/waiting-spinner";
import { textLight } from "../styles/common";

export default function WaitingPage() {
  console.log("waiting page");
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black flex justify-center items-center">
      <WaitingSpinner
        className={`animate-spin mx-2 ${textLight} fill-current`}
      />
    </div>
  );
}
