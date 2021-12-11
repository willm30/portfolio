import React, { useContext, useLayoutEffect, useState } from "react";
import { centerOn, centerIn } from "../../../animations/tabClick";
import { PageProps } from "gatsby";
import { TabNavigationContext } from "../../../context/tabNavigation";
import { runOpeningAnimation } from "../../../animations/opening";
import ScreenShotTemplate from "./galllery/screenShotTemplate";
import TOC from "../../blog/tableOfContents/toc";
import CentreSidepiece from "./centreSidepiece";
import CenterTemplate from "./centerTemplate";
import FooterTemplate from "./content/footer/footer";

export default function CentrePiece({
  data,
  location,
  pageContext,
}: {
  data: any;
  location: PageProps["location"];
  pageContext: any;
}) {
  const { pathname } = location;
  const [isTabNavigation, setIsTabNavigation] =
    useContext(TabNavigationContext);
  const [, setOpeningComplete] = useState(false);
  const { imgFull, imgThumbnail, post } = data;
  const { frontmatter, tableOfContents } = post;
  const { imgRegex, videoLink } = frontmatter;
  const { items } = tableOfContents;
  const isBrowser = typeof window != "undefined";
  const isMobile = isBrowser && window.innerWidth < 768;
  const openingComplete =
    isBrowser && window.sessionStorage.getItem("isOpeningComplete");
  const { nextPost, prevPost } = pageContext;

  useLayoutEffect(() => {
    const prefersReducedMotion =
      isBrowser &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      if (!openingComplete && pathname == "/") {
        runOpeningAnimation();
        window.sessionStorage.setItem("isOpeningComplete", "true");
        setOpeningComplete(true);
      } else {
        if (isTabNavigation) {
          centerIn();
          setIsTabNavigation(false);
        } else {
          centerOn();
        }
      }
    } else {
      centerOn();
    }
  }, []);

  return (
    <>
      {items && !isMobile && (
        <CentreSidepiece left={true}>
          <TOC {...{ items }} />
        </CentreSidepiece>
      )}
      <CenterTemplate {...{ post, pathname }} />
      {isMobile && (
        <div className="flex justify-between w-full">
          {imgRegex && (
            <CentreSidepiece left={false}>
              <ScreenShotTemplate {...{ videoLink, imgFull, imgThumbnail }} />
            </CentreSidepiece>
          )}
          <FooterTemplate {...{ prevPost, nextPost, pathname }} />
        </div>
      )}
      {!isMobile && imgRegex && (
        <CentreSidepiece left={false}>
          <ScreenShotTemplate {...{ videoLink, imgFull, imgThumbnail }} />
        </CentreSidepiece>
      )}
      {!isMobile && <FooterTemplate {...{ prevPost, nextPost, pathname }} />}
    </>
  );
}
