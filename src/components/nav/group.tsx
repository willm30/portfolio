import React, { useContext } from "react";
import { FirstRenderContext } from "../../context/firstRender";
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
  const [firstRender] = useContext(FirstRenderContext);
  const vis = firstRender === null ? "invisible" : "";
  console.log(vis, "vis", firstRender, "firstRender");
  return (
    <div
      id={`${left ? "left" : "right"}-group`}
      className={`${vis} flex flex-col justify-end ${left ? "" : "items-end"}`}
    >
      {titles.map((t) => (
        <Heading title={t} pathname={pathname} key={t} />
      ))}
    </div>
  );
}
