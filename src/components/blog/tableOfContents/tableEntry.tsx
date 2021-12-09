import React from "react";
import { invertBaseColorsHover, textSm } from "../../../styles/common";

export default function TableEntry({ item, bgColor, onClick }) {
  return (
    <li
      className={`list-arr list-none ${bgColor} ${invertBaseColorsHover} ${textSm} my-4 pl-4 pr-2`}
      key={item.title}
    >
      <a href={item.url} onClick={onClick}>
        {item.title}
      </a>
    </li>
  );
}
