import React, { useEffect, useRef, useState } from "react";
import {
  bgLight,
  borderLight,
  highlight,
  textDark,
} from "../../../styles/common";
import TableEntry from "./tableEntry";

export default function TOC({ items }) {
  const [intersecting, setIntersecting] = useState();
  const isBrowser = typeof window != "undefined";
  const container = useRef();

  useEffect(() => {
    const notMobile = document.getElementById("center-container");
    const mobile = document.getElementById("center-root");

    const options = {
      root: window.innerWidth < 768 ? mobile : notMobile,
      rootMargin: `0px 0px -30% 0px`,
      threshold: 1.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
      className={`hidden ${borderLight} border-2 md:flex flex-col justify-center items-center`}
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
