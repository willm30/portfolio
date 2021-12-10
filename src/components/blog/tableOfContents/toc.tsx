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
import TableEntry from "./tableEntry";

export default function TOC({ items }) {
  const [hasOverflowed, setHasOverflowed] = useState(false);
  const [intersecting, setIntersecting] = useState();
  const isBrowser = typeof window != "undefined";
  const container = useRef();
  useOverflowEffect(container, setHasOverflowed);

  useEffect(() => {
    const options = {
      root: document.getElementById("center-container"),
      rootMargin: "0px 0px -30% 0px",
      threshold: 1.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isBrowser) {
          history.pushState(null, document.title, `#${entry.target.id}`);
          setIntersecting(entry); // forces re-render
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
      <ul>
        {items.map((i) => {
          let bgColor = "";

          if (isBrowser && window.location.hash == i.url)
            bgColor = `${highlight}`;

          return (
            <TableEntry
              item={i}
              bgColor={bgColor}
              onClick={() => handleClick(i.url)}
              key={i.url}
            />
          );
        })}
      </ul>
    </div>
  );
}
