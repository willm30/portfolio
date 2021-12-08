import React from "react";
import PortfolioFooter from "./portfolioFooter";
import WritingFooter from "./writingFooter";

export default function FooterTemplate({ prev, next, pathname }) {
  return (
    <div className="flex justify-between w-full">
      {pathname.includes("writing/") ? (
        <WritingFooter {...{ prev, next, pathname }} />
      ) : null}
      {pathname.includes("work/portfolio/") ? (
        <PortfolioFooter {...{ prev, next, pathname }} />
      ) : null}
    </div>
  );
}
