import React from "react";
import { bgDark } from "../../styles/common";
import Group from "../nav/group";
import Seo from "../seo/seo";
import Initial from "../nav/initial";
import HomeButton from "../nav/home";

export default function Scaffold({
  children,
  location,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  location: any;
  title: string;
}) {
  const { pathname } = location;

  const styles = {
    desktop: {
      cont: `h-screen w-full grid md:grid-cols-scaffold grid-rows-3 md:grid-rows-1 overflow-hidden ${bgDark}`,
      left: "md:col-start-1 md:col-end-2 md:row-start-1 md:grid md:grid-cols-1 md:grid-rows-w",
      center: "md:col-start-2 md:col-end-3 md:row-start-1 md:grid-rows-centre",
      right:
        "md:col-start-3 md:col-end-4 md:row-start-1 md:grid md:grid-cols-1 md:grid-rows-w",
    },
    mobile: {
      cont: "grid-cols-2",
      left: "row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col justify-end",
      center:
        "col-start-1 col-end-3 row-start-1 row-end-3 grid grid-cols-1 grid-rows-mobCenter",
      right:
        "row-start-3 row-end-4 col-start-2 col-end-3 flex flex-col justify-end",
    },
  };
  return (
    <div className={`${styles.desktop.cont} ${styles.mobile.cont}`}>
      <Seo title={title} />
      <div className={`${styles.desktop.left} ${styles.mobile.left}`}>
        <Initial initial="W" location={location} />
        <Group left={true} titles={["Work", "Writing"]} pathname={pathname} />
      </div>
      <div className={`${styles.desktop.center} ${styles.mobile.center}`}>
        <HomeButton location={location} />
        {children}
      </div>
      <div className={`${styles.desktop.right} ${styles.mobile.right}`}>
        <Initial initial="M" location={location} />
        <Group left={false} titles={["Mail", "More"]} pathname={pathname} />
      </div>
    </div>
  );
}
