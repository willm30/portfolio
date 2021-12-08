import React from "react";
import {
  bgLight,
  textDark,
  fontAlt,
  textLarge,
} from "../../../../../styles/common";

export default function ContentHeading({ children }) {
  return (
    <h1
      className={`text-center hover:underline ${bgLight} ${textDark} ${fontAlt} ${textLarge} py-0.5`}
    >
      {children}
    </h1>
  );
}
