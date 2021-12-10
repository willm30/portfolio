import React from "react";
import WaitingSpinner from "../icons/waiting-spinner";
import { bgDark, textLight } from "../styles/common";

export default function WaitingPage() {
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen ${bgDark} flex justify-center items-center`}
    >
      <WaitingSpinner
        className={`animate-spin mx-2 ${textLight} fill-current`}
      />
    </div>
  );
}
