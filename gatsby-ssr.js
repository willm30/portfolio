const React = require("react"); // eslint-disable-line
const tabNavigation = require("./src/context/tabNavigation") // eslint-disable-line

const TabNavigationProvider = tabNavigation.TabNavigationProvider;

exports.wrapRootElement = ({ element }) => {
  return <TabNavigationProvider>{element}</TabNavigationProvider>;
};
