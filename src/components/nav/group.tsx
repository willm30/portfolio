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
  const id = `${left ? "left" : "right"}-group`;
  const items = left ? "" : "md:items-end";
  return (
    <div
      id={id}
      className={`flex flex-col items-stretch md:justify-end ${items} h-full w-1/2 md:w-auto`}
    >
      {titles.map((t) => (
        <Heading title={t} pathname={pathname} key={t} />
      ))}
    </div>
  );
}
