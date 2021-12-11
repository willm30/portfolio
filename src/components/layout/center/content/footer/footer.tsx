import React from "react";
import PortfolioFooter from "./portfolioFooter";
import WritingFooter from "./writingFooter";

export default function FooterTemplate({ prevPost, nextPost, pathname }) {
  const isWriting = pathname.includes("writing/");
  const isPortfolio = pathname.includes("work/portfolio/");
  const placement =
    "col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3";

  const styles = {
    desktop: "md:w-full md:flex-initial",
    mobile: "min-h-0 flex-auto",
  };
  return (
    <div
      className={`${placement} flex w-[50%] flex-auto justify-between items-center ${styles.desktop} ${styles.mobile}`}
    >
      {isWriting && <WritingFooter {...{ prevPost, nextPost, pathname }} />}
      {isPortfolio && <PortfolioFooter {...{ pathname }} />}
    </div>
  );
}
