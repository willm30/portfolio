import React from "react";
import NextPost from "../../../../buttons/nextPost";

export default function PortfolioFooter({ pathname }) {
  return (
    <div className="md:mx-0 mx-2 w-full md:w-auto">
      <NextPost
        url={`/work/portfolio`}
        pathname={pathname}
        className="w-full md:w-auto"
      >
        &larr; Portfolio
      </NextPost>
    </div>
  );
}
