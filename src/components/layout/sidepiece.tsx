import React from "react";
import Group from "../nav/group";
import Initial from "../nav/initial";

export default function Sidepiece({ pathname, titles, left }) {
  return (
    <>
      <Initial initial={`${left ? "W" : "M"}`} location={location} />
      <Group {...{ pathname, titles, left }} />
    </>
  );
}
