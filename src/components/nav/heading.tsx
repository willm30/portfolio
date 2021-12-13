import React from "react";
import {
  bgDark,
  borderLight,
  fontAlt,
  textLight,
  buttonBase,
} from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function Heading({
  title,
  pathname,
  linkClass,
}: {
  title: string;
  pathname: string;
  linkClass: string;
}) {
  const style = pathname.includes(title.toLowerCase())
    ? `${textLight} ${bgDark} ${borderLight} border-2 py-2 px-4`
    : `${buttonBase} py-2 px-4`;

  const isBrowser = typeof window != "undefined";
  const short = isBrowser && window.innerHeight < 600;
  const mobile = isBrowser && window.innerWidth < 787;

  return (
    <NavigateButton
      url={`/${title.toLowerCase()}`}
      pathname={pathname}
      className={`md:h-20 md:flex md:justify-center md:items-center md:w-min my-2 md:my-4 rounded-sm ${style} text-center mx-2 md:mx-0`}
      linkClass={linkClass}
    >
      <span
        className={`${fontAlt}`}
        style={{
          fontSize: "clamp(1.3rem, 4vw, 3rem)",
        }}
      >
        {title}
      </span>
    </NavigateButton>
  );
}
