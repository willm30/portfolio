import React from "react";
import {
  bgLight,
  revertBaseColorsHover,
  textDark,
} from "../../../styles/common";

export default function SpanRev({ children }) {
  return (
    <span
      className={`transition-colors ${revertBaseColorsHover} ${bgLight} ${textDark}`}
    >
      {children}
    </span>
  );
}
