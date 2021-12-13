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
  const placement = `${
    left
      ? "row-start-4 row-end-5 col-start-1 col-end-2 md:row-start-3 md:row-end-5 md:mr-4"
      : "row-start-4 row-end-5 col-start-2 col-end-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 justify-self-end md:ml-4"
  }`;
  return (
    <nav
      id={id}
      className={`flex flex-col items-stretch md:justify-end ${items} ${placement} h-full w-full md:w-auto`}
    >
      {titles.map((t) => (
        <Heading
          title={t}
          pathname={pathname}
          key={t}
          linkClass={`flex ${
            left ? "" : "justify-end"
          } md:block md:w-auto flex-col items-stretch`}
        />
      ))}
    </nav>
  );
}
