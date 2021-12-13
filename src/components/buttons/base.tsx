import React from "react";
import { buttonBase, textLarge } from "../../styles/common";

export default function BaseButton({ children, onClick, id, className }) {
  return (
    <button
      id={id}
      className={`${textLarge} ${buttonBase} ${className} my-2 md:my-4 mx-2 md:mx-0 py-2 px-4 flex justify-center items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
