import React from "react";
import { buttonBase, textLarge } from "../../styles/common";
import NavigateButton from "./navigate";

export default function NextPost({ children, url, pathname }) {
  return (
    <NavigateButton
      {...{ url, pathname }}
      className={`${textLarge} ${buttonBase} my-4 p-2 flex justify-center items-center`}
    >
      {children}
    </NavigateButton>
  );
}
