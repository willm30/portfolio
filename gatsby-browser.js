import "./src/styles/global.css";
import React from "react";
import { FirstRenderProvider } from "./src/context/firstRender";
import { TabNavigationProvider } from "./src/context/tabNavigation";
import ReactRecaptcha from "react-recaptcha";

export function wrapRootElement({ element }) {
  return (
    <ReactRecaptcha>
      <FirstRenderProvider>
        <TabNavigationProvider>{element}</TabNavigationProvider>
      </FirstRenderProvider>
    </ReactRecaptcha>
  );
}
