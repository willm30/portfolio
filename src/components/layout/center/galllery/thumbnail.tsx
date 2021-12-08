import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function Thumbnail({ onClick, image, className }) {
  return (
    <button className={`relative max-w-[200px] ${className}`} onClick={onClick}>
      <div className="absolute w-full h-full z-10 hover:bg-white hover:bg-opacity-50"></div>
      <GatsbyImage image={image} alt="" />
    </button>
  );
}
