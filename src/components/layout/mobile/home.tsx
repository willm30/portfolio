import React from "react";
import Home from "../../../icons/home";
import { fontBold, textLight, textXL } from "../../../styles/common";
import NavigateButton from "../../buttons/navigate";

export default function HomeButton({ location }) {
  const { pathname } = location;

  return (
    <div
      id="home-button"
      className="md:hidden m-4 flex justify-between col-start-1 col-end-2 row-start-1 row-end-2 min-h-[50px]"
    >
      <NavigateButton url="/" pathname={pathname} className="">
        <Home className={`fill-current ${textLight}`} />
      </NavigateButton>
      <NavigateButton
        url="/"
        pathname={pathname}
        className={`${fontBold} ${textLight} ${textXL} text-right`}
      >
        <span className="mx-px">W</span>
        <span className="mx-px">M</span>
      </NavigateButton>
    </div>
  );
}
