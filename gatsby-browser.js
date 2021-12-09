import "./src/styles/global.css";
import React from "react";
import { TabNavigationProvider } from "./src/context/tabNavigation";

export function wrapRootElement({ element }) {
  return <TabNavigationProvider>{element}</TabNavigationProvider>;
}
