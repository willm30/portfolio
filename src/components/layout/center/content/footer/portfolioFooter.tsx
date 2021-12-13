import React from "react";
import NextPost from "../../../../buttons/nextPost";

export default function PortfolioFooter({ pathname }) {
  return (
    <div className="w-1/2 md:w-auto md:mx-0 mx-2">
      <NextPost
        url={`/work/portfolio`}
        pathname={pathname}
        className="w-full md:w-auto"
        linkClass=""
      >
        &larr; Portfolio
      </NextPost>
    </div>
  );
}
