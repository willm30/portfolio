import React from "react";
import { bgDark, fontBase, textBase, textLight } from "../../styles/common";
import Seo from "../seo/seo";
import Sidepiece from "./sidepiece";
import CentrePiece from "./center/centrepiece";
import { PageProps } from "gatsby";
import FooterTemplate from "./center/content/footer/footer";
import HomeButton from "./mobile/home";
import Group from "../nav/group";

export default function Scaffold({
  location,
  title,
  data,
  pageContext,
}: {
  location: PageProps["location"];
  data: PageProps["data"];
  pageContext: any;
  title: string;
}) {
  const { pathname } = location;
  const isMobile = typeof window != "undefined" && window.innerWidth < 768;

  const styles = {
    desktop: {
      root: "md:justify-between md:overflow-hidden md:flex md:flex-row",
      centerRoot:
        "md:grid-cols-center md:grid-rows-center md:h-full md:max-h-screen",
    },
    mobile: {
      root: "overflow-y-scroll grid grid-cols-1 grid-rows-mobScaffold ",
      centerRoot:
        "col-start-1 col-end-2 row-start-2 row-end-3 min-h-[75vh] grid-cols-1 grid-rows-mobCenter",
    },
  };

  return (
    <div
      className={`h-screen w-screen ${bgDark} ${textLight} ${textBase} ${fontBase} ${styles.desktop.root} ${styles.mobile.root}`}
    >
      <Seo title={title} />
      <HomeButton location={location} />
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
    </div>
  );
}
