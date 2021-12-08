import React from "react";
import NavigateButton from "../buttons/navigate";
import Span from "./elements/span";

export default function QuickLink() {
  return (
    <p className="flex justify-center items-center my-4">
      <span className="pr-1">&rarr;</span>
      <NavigateButton
        url="/work/portfolio"
        pathname="/work"
        className="underline"
      >
        <Span>If you're looking for my portfolio</Span>
      </NavigateButton>{" "}
      <span className="pl-1">👀</span>
    </p>
  );
}
