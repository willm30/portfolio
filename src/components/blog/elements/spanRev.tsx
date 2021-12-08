import React from "react";
import {
  bgLight,
  revertBaseColorsHover,
  textDark,
} from "../../../styles/common";

export default function SpanRev({ children }) {
  return (
    <span className={`${revertBaseColorsHover} ${bgLight} ${textDark}`}>
      {children}
    </span>
  );
}
