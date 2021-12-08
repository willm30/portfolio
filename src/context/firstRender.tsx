import React, { useState } from "react";

export const FirstRenderContext = React.createContext(null);

export const FirstRenderProvider = ({ children }) => {
  function getCurrentSessionStorage() {
    if (typeof window != "undefined") {
      return window.sessionStorage.getItem("isFirstRender");
    }
  }

  function updateFirstRender(defaultValue) {
    const [firstRender, setFirstRender] = useState(defaultValue);
    function handleSetFirstRender() {
      setFirstRender(false);
      window.sessionStorage.setItem("isFirstRender", "false");
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
