import React, { useRef } from "react";
import { useEffect } from "react";
import { setVisible } from "../../animations/tabClick";
import { fontBold, textLight } from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function Initial({ initial, location }) {
  const { pathname } = location;
  const spanRef = useRef();

  useEffect(() => {
    setVisible(spanRef.current);
  });

  return (
    <NavigateButton url="/" pathname={pathname} className="hidden md:block">
      <div
        className={`flex justify-center mt-8 ${textLight} ${fontBold}`}
        style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}
      >
        <span ref={spanRef} id={`${initial}-initial`} className="invisible">
          {initial}
        </span>
      </div>
    </NavigateButton>
  );
}
