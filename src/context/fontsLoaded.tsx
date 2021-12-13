import React, { useState } from "react";

export const FontsLoadedContext = React.createContext(null);

export const FontsLoadedProvider = ({ children }) => {
  const fontsLoadedStateHook = useState(false);

  return (
    <FontsLoadedContext.Provider value={fontsLoadedStateHook}>
      {children}
    </FontsLoadedContext.Provider>
  );
};
