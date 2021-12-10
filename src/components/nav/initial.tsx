import React from "react";
import { fontBold, textLight } from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function Initial({ initial, location }) {
  const { pathname } = location;

  return (
    <NavigateButton url="/" pathname={pathname} className="hidden md:block">
      <div
        className={`flex justify-center mt-8 ${textLight} ${fontBold}`}
        style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}
      >
        <span id={`${initial}-initial`}>{initial}</span>
      </div>
    </NavigateButton>
  );
}
