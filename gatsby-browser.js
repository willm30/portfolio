import "./src/styles/global.css";
import React from "react";
import { FirstRenderProvider } from "./src/context/firstRender";
import { TabNavigationProvider } from "./src/context/tabNavigation";
export function wrapRootElement({ element }) {
  return (
    <FirstRenderProvider>
      <TabNavigationProvider>{element}</TabNavigationProvider>
    </FirstRenderProvider>
  );
}
