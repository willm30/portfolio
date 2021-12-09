const React = require("react"); // eslint-disable-line
const tabNavigation = require("./src/context/tabNavigation") // eslint-disable-line
const firstRender = require("./src/context/firstRender");  // eslint-disable-line 

const TabNavigationProvider = tabNavigation.TabNavigationProvider;
const FirstRenderProvider = firstRender.FirstRenderProvider;

exports.wrapRootElement = ({ element }) => {
  return (
    <FirstRenderProvider>
      <TabNavigationProvider>{element}</TabNavigationProvider>
    </FirstRenderProvider>
  );
};
