import React from "react";
import {
  bgDark,
  bgLight,
  borderLight,
  fontHeading,
  fontAlt,
  textDark,
  textLight,
  buttonBase,
} from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function Heading({
  title,
  pathname,
}: {
  title: string;
  pathname: string;
}) {
  const style = pathname.includes(title.toLowerCase())
    ? `${textLight} ${bgDark} ${borderLight} border-2 py-2 px-4`
    : `${buttonBase} py-2 px-4`;

  return (
    <div className={`w-min my-4 rounded-sm ${style}`}>
      <NavigateButton
        url={`/${title.toLowerCase()}`}
        pathname={pathname}
        className=""
      >
        <span
          className={`${fontAlt} `}
          style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
        >
          {title}
        </span>
      </NavigateButton>
    </div>
  );
}
