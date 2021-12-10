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
import { FirstRenderContext } from "../../../context/firstRender";

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
  const [scrollY, setScrollY] = useState(0);
  const [firstRender, handleFirstRender] = useContext(FirstRenderContext);
  const { frontmatter, tableOfContents } = data.post;
  const { imgRegex } = frontmatter;
  const { items } = tableOfContents;
  const { nextPost, previousPost } = pageContext;
  const isBrowser = typeof window != "undefined";

  useLayoutEffect(() => {
    let prefersReducedMotion;

    if (isBrowser)
      prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    if (!prefersReducedMotion) {
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

  const container = useRef();
  const [hasOverflowed, setHasOverflowed] = useState(false);

  useOverflowEffect(container, setHasOverflowed);

  const gridCols = imgRegex
    ? items
      ? "md:grid-cols-centre"
      : "md:grid-cols-centre2R"
    : items
    ? "md:grid-cols-centre2L"
    : "md:grid-cols-centre";

  const justify = pathname.includes("writing/")
    ? "justify-between mt-8"
    : "justify-center";
  const styles = {
    desktop: {
      cont: `md:p-0 md:grid ${gridCols} md:grid-rows-centre md:overflow-y-visible ${textLight} ${textBase} ${fontBase}`,
      centerWrapper: `md:col-start-2 md:col-end-3 flex flex-col ${justify}`,
      center: `invisible max-h-[85%] border-2 ${borderLight} p-4 ${
        hasOverflowed ? "overflow-y-scroll" : ""
      } ${scrollDefault} smooth-scroll`,
      centerRight: `invisible md:col-start-3 md:col-end-4 flex flex-col justify-center`,
    },
    mobile: {
      cont: "p-4 overflow-y-scroll",
      centerWrapper: "",
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
        className={`${styles.desktop.centerWrapper} ${styles.mobile.centerWrapper}`}
      >
        <div
          ref={container}
          id="center-container"
          className={`${styles.desktop.center} ${styles.mobile.center}`}
        >
          <ContentTemplate blogPost={data.post} pathname={pathname} />
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
            imgFull={data.imgFull}
            imgThumbnail={data.imgThumbnail}
          />
        ) : null}
      </div>
    </div>
  );
}
