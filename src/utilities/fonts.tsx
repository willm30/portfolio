const isBrowser = typeof document != "undefined";

export async function areFontsReady(setIsLoading) {
  if (isBrowser) {
    await document.fonts.ready;
    setIsLoading(false);
  }
}
