export async function areFontsReady(setIsLoading, boolean) {
  const isBrowser = typeof document != "undefined";

  if (isBrowser) {
    await document.fonts.ready;
    setIsLoading(boolean);
  }
}
