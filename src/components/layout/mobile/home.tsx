import React from "react";
import Home from "../../../icons/home";
import { fontBold, textLight, textXL } from "../../../styles/common";
import NavigateButton from "../../buttons/navigate";

export default function HomeButton({ location }) {
  const { pathname } = location;
  const placement = "col-start-1 col-end-2 row-start-1 row-end-2 self-center";

  return (
    <div
      id="home-button"
      className={`md:hidden ${placement} m-4 flex items-center min-h-[50px]`}
    >
      <NavigateButton url="/" pathname={pathname} className="">
        <Home className={`fill-current ${textLight}`} />
      </NavigateButton>
    </div>
  );
}
