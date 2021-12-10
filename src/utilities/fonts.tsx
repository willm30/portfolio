export async function areFontsReady(setHaveFontsLoaded, boolean) {
  const isBrowser = typeof document != "undefined";

  if (isBrowser) {
    await document.fonts.ready;
    window.sessionStorage.setItem("fontsLoaded", "true");
    setHaveFontsLoaded(boolean);
  }
}
