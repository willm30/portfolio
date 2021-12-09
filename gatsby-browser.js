import "./src/styles/global.css";
import React from "react";
import { TabNavigationProvider } from "./src/context/tabNavigation";
import { FirstRenderProvider } from "./src/context/firstRender";

export function wrapRootElement({ element }) {
  return (
    <FirstRenderProvider>
      <TabNavigationProvider>{element}</TabNavigationProvider>{" "}
    </FirstRenderProvider>
  );
}
