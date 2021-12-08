import React from "react";
import { invertBaseColorsHover } from "../../../styles/common";

export default function Li({ children }) {
  return (
    <li className={`list-arr list-none ${invertBaseColorsHover}`}>
      {children}
    </li>
  );
}
