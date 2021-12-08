import React, { useState } from "react";

export const FirstRenderContext = React.createContext(null);
const isBrowser = typeof window != "undefined";

export const FirstRenderProvider = ({ children }) => {
  function getCurrentSessionStorage() {
    if (isBrowser) return window.sessionStorage.getItem("isFirstRender");
  }

  function updateFirstRender(defaultValue) {
    const [firstRender, setFirstRender] = useState(defaultValue);
    function handleSetFirstRender() {
      setFirstRender(false);
      if (isBrowser) window.sessionStorage.setItem("isFirstRender", "false");
    }
    return [firstRender, handleSetFirstRender];
  }

  const firstRenderStateHook = updateFirstRender(getCurrentSessionStorage());

  return (
    <FirstRenderContext.Provider value={firstRenderStateHook}>
      {children}
    </FirstRenderContext.Provider>
  );
};
