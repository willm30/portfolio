import React, { useContext, useLayoutEffect, useState } from "react";
import { bgDark, fontBase, textBase, textLight } from "../../styles/common";
import Seo from "../seo/seo";
import { PageProps } from "gatsby";
import FooterTemplate from "./center/content/footer/footer";
import HomeButton from "./mobile/home";
import Group from "../nav/group";
import Initial from "../nav/initial";
import TOC from "../blog/tableOfContents/toc";
import CenterTemplate from "./center/centerTemplate";
import BaseButton from "../buttons/base";
import ScreenShotTemplate from "./center/galllery/screenShotTemplate";
import { isInBrowser, isScreenMobile } from "../../utilities/screens";
import { runOpeningAnimation } from "../../animations/opening";
import { centerIn, centerOn } from "../../animations/tabClick";
import { TabNavigationContext } from "../../context/tabNavigation";
import { useEffect } from "react";
import WaitingSpinner from "../../icons/waiting-spinner";
import { areFontsReady } from "../../utilities/fonts";

export default function Scaffold({
  location,
  title,
  data,
  pageContext,
}: {
  location: PageProps["location"];
  data: any;
  pageContext: any;
  title: string;
}) {
  const { pathname } = location;
  const isBrowser = isInBrowser();
  const [isMobile, setIsMobile] = useState(isScreenMobile());
  const { imgFull, imgThumbnail, post } = data;
  const { frontmatter, tableOfContents } = post;
  const { imgRegex, videoLink } = frontmatter;
  const { items } = tableOfContents;
  const { nextPost, prevPost } = pageContext;
  const [displayModal, setDisplayModal] = useState(false);
  const [, setOpeningComplete] = useState(false);
  const openingComplete =
    isBrowser && window.sessionStorage.getItem("isOpeningComplete");
  const [isTabNavigation, setIsTabNavigation] =
    useContext(TabNavigationContext);
  const fontsLoaded = isBrowser && window.sessionStorage.getItem("fontsLoaded");
  const [haveFontsLoaded, setHaveFontsLoaded] = useState(fontsLoaded);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    !haveFontsLoaded && areFontsReady(setHaveFontsLoaded, true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setIsMobile(isScreenMobile());
    centerOn();
  }

  useLayoutEffect(() => {
    if (haveFontsLoaded) {
      const prefersReducedMotion =
        isBrowser &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
        if (!openingComplete && pathname == "/") {
          console.log("runn");
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
    }
  }, [haveFontsLoaded]);

  return (
    <div
      className={`${bgDark} ${textLight} ${textBase} ${fontBase} w-screen h-screen`}
    >
      <div
        className={`${
          haveFontsLoaded ? "hidden" : "flex"
        } h-screen w-screen flex justify-center items-center z-0`}
      >
        <WaitingSpinner
          className={`animate-spin mx-2 ${textLight} fill-current`}
        />
      </div>
      <div
        className={`${
          haveFontsLoaded ? "grid" : "hidden"
        } z-10 grid-cols-rootGrid md:grid-cols-rootGridLg grid-rows-rootGrid md:grid-rows-rootGridLg h-screen w-screen overflow-y-scroll md:overflow-hidden`}
      >
        <Seo title={title} />
        <HomeButton location={location} />
        <div
          id="initials"
          className={`col-start-2 col-end-3 row-start-1 row-end-2 md:self-center mx-2 md:mx-4 md:w-auto md:py-4 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 flex items-center md:items-stretch justify-end md:justify-between`}
        >
          <Initial initial="W" location={location} />
          <Initial initial="M" location={location} />
        </div>
        {items && !isMobile && <TOC {...{ items }} />}
        <CenterTemplate {...{ post, pathname }} />
        {imgRegex && (
          <div
            id="gal"
            className="invisible -mt-4 md:ml-4 md:max-w-[200px] row-start-3 row-end-4 justify-self-center md:justify-self-start self-center md:self-start w-full col-start-1 col-end-2 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-4 h-max flex flex-col justify-center"
          >
            {!isMobile && (
              <BaseButton
                onClick={() => setDisplayModal(true)}
                className="mx-2 md:mx-0"
              >
                Open Gallery
              </BaseButton>
            )}
            <ScreenShotTemplate
              {...{
                videoLink,
                imgFull,
                imgThumbnail,
                displayModal,
                setDisplayModal,
              }}
            />
          </div>
        )}
        <FooterTemplate
          {...{ prevPost, nextPost, pathname, imgRegex, setDisplayModal }}
        />
        <Group pathname={pathname} titles={["Work", "Writing"]} left={true} />
        <Group pathname={pathname} titles={["Mail", "More"]} left={false} />
      </div>
    </div>
  );
}

/*
<div id="container">
    <header id="home">Home</header>
    <header id="w">W</header>
    <header id="m">M</header>
    <div id="toc">TOC</div>
    <article>Article content</article>
    <div id="open">Open</div>
    <div id="gal">Gallery</div>
    <div id="controls">Prev / Next</div>
    <nav id="left">Left navigation</nav>
    <nav id="right">Right navigation</nav>
  </div>
*/

/*
{!isMobile && (
        <div className={`flex flex-col h-full md:w-auto w-1/2`}>
          <Sidepiece
            pathname={pathname}
            titles={["Work", "Writing"]}
            left={true}
          />
        </div>
      )}
      <div
        id="center-root"
        className={`invisible grid ${styles.desktop.centerRoot} ${styles.mobile.centerRoot}`}
      >
        <CentrePiece {...{ data, location, pageContext }} />
      </div>
      <div className="flex md:flex-col md:w-auto w-full col-start-1 col-end-2 row-start-3 row-end-4 h-[25vh] md:h-full">
        {isMobile && (
          <>
            <Group
              pathname={pathname}
              titles={["Work", "Writing"]}
              left={true}
            />
            <Group pathname={pathname} titles={["Mail", "More"]} left={false} />
          </>
        )}
        {!isMobile && (
          <Sidepiece
            pathname={pathname}
            titles={["Mail", "More"]}
            left={false}
          />
        )}
      </div>
*/
