import React from "react";
import { fontBold, textLight } from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function Initial({ initial, location }) {
  const { pathname } = location;
  const short = typeof window != "undefined" && window.innerHeight < 600;

  return (
    <NavigateButton
      url="/"
      pathname={pathname}
      className="hidden md:flex flex-col md:h-[30vh] md:justify-center md:items-center md:w-full"
    >
      <div
        id={`${initial}-initial`}
        className={`mt-8 ${textLight} ${fontBold}`}
        style={{ fontSize: `${short ? "3.5rem" : "clamp(4rem, 10vw, 6rem)"}` }}
      >
        {initial}
      </div>
    </NavigateButton>
  );
}
