import React, { useRef, useState } from "react";
import {
  bgLight,
  borderLight,
  invertBaseColorsHover,
  scrollDefault,
  textDark,
  textSm,
} from "../../../styles/common";
import { useOverflowEffect } from "../../../utilities/hooks/checkOverflow";
import Li from "../elements/li";

export default function TOC({ items }) {
  const [hasOverflowed, setHasOverflowed] = useState(false);
  const container = useRef();
  useOverflowEffect(container, setHasOverflowed);

  return (
    <div
      ref={container}
      className={`${borderLight} border-2 -translate-x-4 flex flex-col justify-center items-center ${
        hasOverflowed ? "overflow-y-scroll" : ""
      } ${scrollDefault}`}
    >
      <h2 className={`${bgLight} ${textDark} mt-4`}>Contents</h2>
      <ul className="">
        {items.map((i) => (
          <li
            className={`list-arr list-none ${invertBaseColorsHover} ${textSm} my-4 pl-4 pr-2`}
            key={i.title}
          >
            <a href={i.url}>{i.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
