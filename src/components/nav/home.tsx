import React from "react";
import Home from "../../icons/home";
import { textLight } from "../../styles/common";
import NavigateButton from "../buttons/navigate";

export default function HomeButton({ location }) {
  const { pathname } = location;

  return (
    <div id="home-button" className="md:hidden m-4">
      <NavigateButton url="/" pathname={pathname} className="">
        <Home className={`fill-current ${textLight}`} />
      </NavigateButton>
    </div>
  );
}
