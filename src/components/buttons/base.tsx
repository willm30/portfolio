import React from "react";
import { buttonBase, textLarge } from "../../styles/common";

export default function BaseButton({ children, onClick }) {
  return (
    <button
      className={`${textLarge} ${buttonBase} my-4 p-2 flex justify-center items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
