import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { centerOn, centerIn } from "../../../animations/tabClick";
import { PageProps } from "gatsby";
import { TabNavigationContext } from "../../../context/tabNavigation";
import { FirstRenderContext } from "../../../context/firstRender";
import {
  openingAnimation,
  openingAnimationMobile,
} from "../../../animations/opening";
import {
  textLight,
  textBase,
  fontBase,
  borderLight,
  scrollDefault,
} from "../../../styles/common";
import ContentTemplate from "./content/contentTemplate";
import ScreenShotTemplate from "./galllery/screenShotTemplate";
import TOC from "../../blog/tableOfContents/toc";
import { useOverflowEffect } from "../../../utilities/hooks/checkOverflow";
import FooterTemplate from "./content/footer/footer";

export default function CentrePiece({
  blogPostData,
  location,
  pageContext,
}: {
  blogPostData: any;
  location: PageProps["location"];
  pageContext: any;
}) {
  const { pathname } = location;
  const [isTabNavigation, setIsTabNavigation] =
    useContext(TabNavigationContext);
  const [scrollY, setScrollY] = useState(0);
  const [firstRender, handleFirstRender] = useContext(FirstRenderContext);
  const { frontmatter, tableOfContents } = blogPostData.post;
  const { imgRegex } = frontmatter;
  const { items } = tableOfContents;
  const { nextPost, previousPost } = pageContext;
  const isBrowser = typeof window != "undefined";

  useLayoutEffect(() => {
    let reducedMotion;

    if (isBrowser)
      reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    if (!reducedMotion) {
      if (firstRender === null && pathname == "/") {
        handleFirstRender();
        if (window.innerWidth < 768) {
          openingAnimationMobile();
        } else {
          openingAnimation();
        }
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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollY]);

  function handleKeyDown(e) {
    const centerCont = document.getElementById("center-container");
    if (e.key == "ArrowDown") {
      centerCont.scrollBy(0, 50);
      setScrollY(centerCont.scrollTop);
    } else if (e.key == "ArrowUp") {
      centerCont.scrollBy(0, -50);
      setScrollY(centerCont.scrollTop);
    }
  }

  const container = useRef<HTMLElement>(null);
  const [hasOverflowed, setHasOverflowed] = useState(false);

  useOverflowEffect(container, setHasOverflowed);

  const gridCols = imgRegex
    ? items
      ? "md:grid-cols-centre"
      : "md:grid-cols-centre2R"
    : items
    ? "md:grid-cols-centre2L"
    : "md:grid-cols-centre";

  const styles = {
    desktop: {
      cont: `md:p-0 md:grid ${gridCols} md:grid-rows-centre md:overflow-y-visible ${textLight} ${textBase} ${fontBase}`,
      centerCont: `md:col-start-2 md:col-end-3 flex flex-col justify-center`,
      center: `invisible max-h-[80%] border-2 ${borderLight} p-4 ${
        hasOverflowed ? "overflow-y-scroll" : ""
      } ${scrollDefault} smooth-scroll`,
      centerRight: `invisible md:col-start-3 md:col-end-4 flex flex-col justify-center`,
    },
    mobile: {
      cont: "p-4 overflow-y-scroll",
      centerCont: "",
      center: "",
      centerRight: "",
    },
  };
  return (
    <div className={`${styles.desktop.cont} ${styles.mobile.cont}`}>
      <div
        id="center-left"
        className="invisible md:col-start-1 md:col-end-2 flex flex-col justify-center items-center"
      >
        {items ? <TOC {...{ items }} /> : null}
      </div>
      <div
        className={`${styles.desktop.centerCont} ${styles.mobile.centerCont}`}
      >
        <div
          ref={container}
          id="center-container"
          className={`${styles.desktop.center} ${styles.mobile.center}`}
        >
          <ContentTemplate blogPost={blogPostData.post} pathname={pathname} />
        </div>
        <div id="center-footer" className="invisible">
          <FooterTemplate
            prev={previousPost}
            next={nextPost}
            pathname={pathname}
          />
        </div>
      </div>
      <div
        id="center-right"
        className={`${styles.desktop.centerRight} ${styles.mobile.centerRight}`}
      >
        {imgRegex ? (
          <ScreenShotTemplate
            video={frontmatter.videoLink}
            imgFull={blogPostData.imgFull}
            imgThumbnail={blogPostData.imgThumbnail}
          />
        ) : null}
      </div>
    </div>
  );
}
