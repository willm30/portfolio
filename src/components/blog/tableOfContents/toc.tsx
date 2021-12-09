import React, { useEffect, useRef, useState } from "react";
import {
  bgLight,
  borderLight,
  highlight,
  invertBaseColorsHover,
  scrollDefault,
  textDark,
  textSm,
} from "../../../styles/common";
import { useOverflowEffect } from "../../../utilities/hooks/checkOverflow";

export default function TOC({ items }) {
  const [hasOverflowed, setHasOverflowed] = useState(false);
  const [intersecting, setIntersecting] = useState();
  const isBrowser = typeof window != "undefined";
  const container = useRef();
  useOverflowEffect(container, setHasOverflowed);

  useEffect(() => {
    const options = {
      root: document.getElementById("center-container"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isBrowser) {
          history.pushState(null, null, `#${entry.target.id}`);
          setIntersecting(entry);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll("h2.observable");
    targets.forEach((target) => observer.observe(target));
  }, []);

  function handleClick(url) {
    setIntersecting(url);
  }

  return (
    <div
      ref={container}
      className={`${borderLight} border-2 -translate-x-4 flex flex-col justify-center items-center ${
        hasOverflowed ? "overflow-y-scroll" : ""
      } ${scrollDefault}`}
    >
      <h2 className={`${bgLight} ${textDark} mt-4`}>Contents</h2>
      <ul className="">
        {items.map((i) => {
          const bgColor = isBrowser
            ? window.location.hash == i.url
              ? `${highlight}`
              : ""
            : "";
          return (
            <li
              className={`list-arr list-none ${bgColor} ${invertBaseColorsHover} ${textSm} my-4 pl-4 pr-2`}
              key={i.title}
            >
              <a href={i.url} onClick={() => handleClick(i.url)}>
                {i.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
