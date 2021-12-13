import "./src/styles/global.css";
import React from "react";
import { TabNavigationProvider } from "./src/context/tabNavigation";
import { FontsLoadedProvider } from "./src/context/fontsLoaded";

export function wrapRootElement({ element }) {
  return (
    <FontsLoadedProvider>
      <TabNavigationProvider>{element}</TabNavigationProvider>{" "}
    </FontsLoadedProvider>
  );
}
