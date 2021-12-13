const React = require("react"); // eslint-disable-line
const tabNavigation = require("./src/context/tabNavigation") // eslint-disable-line
const fontsLoaded = require("./src/context/fontsLoaded");  // eslint-disable-line 

const TabNavigationProvider = tabNavigation.TabNavigationProvider;
const FontsLoadedProvider = fontsLoaded.FontsLoadedProvider;

exports.wrapRootElement = ({ element }) => {
  return (
    <FontsLoadedProvider>
      <TabNavigationProvider>{element}</TabNavigationProvider>
    </FontsLoadedProvider>
  );
};
