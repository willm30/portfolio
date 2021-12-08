import React from "react";
import NextPost from "../../../../buttons/nextPost";

export default function PortfolioFooter({ pathname }) {
  return (
    <>
      <NextPost url={`/work/portfolio`} pathname={pathname}>
        &larr; Portfolio
      </NextPost>
    </>
  );
}
