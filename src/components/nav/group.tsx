import React, { useEffect, useRef } from "react";
import { setVisible } from "../../animations/tabClick";
import Heading from "./heading";

export default function Group({
  left,
  titles,
  pathname,
}: {
  left: boolean;
  titles: string[];
  pathname: string;
}) {
  const divRef = useRef();
  useEffect(() => {
    setVisible(divRef.current);
  });

  return (
    <div
      ref={divRef}
      id={`${left ? "left" : "right"}-group`}
      className={`invisible flex flex-col justify-end ${
        left ? "" : "items-end"
      }`}
    >
      {titles.map((t) => (
        <Heading title={t} pathname={pathname} key={t} />
      ))}
    </div>
  );
}
