import React from "react";
import NavigateButton from "../buttons/navigate";
import SpanRev from "./elements/spanRev";

export default function WhiteLink({ url, pathname, children }) {
  return (
    <NavigateButton url={url} pathname={pathname} className="">
      <SpanRev>{children}</SpanRev>
    </NavigateButton>
  );
}
