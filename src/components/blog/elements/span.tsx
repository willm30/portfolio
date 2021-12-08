import React from "react";
import { invertBaseColorsHover } from "../../../styles/common";

export default function Span({ children }) {
  return <span className={`${invertBaseColorsHover}`}>{children}</span>;
}
