import React, { useState } from "react";

export const TabNavigationContext =
  React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(
    null
  );

export const TabNavigationProvider = ({ children }) => {
  const tabNavigationState = useState(false);

  return (
    <TabNavigationContext.Provider value={tabNavigationState}>
      {children}
    </TabNavigationContext.Provider>
  );
};
