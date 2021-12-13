import React from "react";
import { isScreenMobile } from "../../../../../utilities/screens";
import BaseButton from "../../../../buttons/base";
import PortfolioFooter from "./portfolioFooter";
import WritingFooter from "./writingFooter";

export default function FooterTemplate({
  prevPost,
  nextPost,
  pathname,
  imgRegex,
  setDisplayModal,
}) {
  const isWriting = pathname.includes("writing/");
  const isPortfolio = pathname.includes("work/portfolio/");
  const placement =
    "col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5";
  const isMobile = isScreenMobile();

  const styles = {
    desktop: "md:w-full md:flex-initial",
    mobile: "flex-auto",
  };
  return (
    <footer
      id="controls"
      className={`${placement} invisible mt-4 md:mt-0 flex justify-between items-center ${styles.desktop} ${styles.mobile}`}
    >
      {isWriting && <WritingFooter {...{ prevPost, nextPost, pathname }} />}
      {isPortfolio && <PortfolioFooter {...{ pathname }} />}
      {isMobile && imgRegex && (
        <BaseButton onClick={() => setDisplayModal(true)} className="w-1/2">
          Open Gallery
        </BaseButton>
      )}
    </footer>
  );
}

/*
  text-center 
*/

/*
text-xl  
 
w-1/2 flex-shrink-0 flex justify-center items-center
*/
