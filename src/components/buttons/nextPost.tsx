import React from "react";
import { buttonBase, textLarge } from "../../styles/common";
import NavigateButton from "./navigate";

export default function NextPost({ children, url, pathname, className }) {
  const isMobile = typeof window != "undefined" && window.innerWidth < 768;

  return (
    <NavigateButton
      {...{ url, pathname }}
      className={`${textLarge} ${buttonBase} my-4 p-2 ${className}`}
      linkClass={`${isMobile && "w-1/2 flex-auto md:mx-0 mx-2"}`}
    >
      {children}
    </NavigateButton>
  );
}
