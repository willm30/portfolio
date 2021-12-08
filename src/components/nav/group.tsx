import React from "react";
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
  return (
    <div
      id={`${left ? "left" : "right"}-group`}
      className={`flex flex-col justify-end ${left ? "" : "items-end"}`}
    >
      {titles.map((t) => (
        <Heading title={t} pathname={pathname} key={t} />
      ))}
    </div>
  );
}
