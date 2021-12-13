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
      className="flex flex-col justify-center items-center md:w-full"
    >
      <div
        id={`${initial}-initial`}
        className={`mt-2 md:mt-8 ${textLight} ${fontBold}`}
      >
        <span
          style={{
            fontSize: "clamp(2rem, 10vw, 6rem)",
          }}
        >
          {initial}
        </span>
      </div>
    </NavigateButton>
  );
}
