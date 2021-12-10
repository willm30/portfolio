export async function areFontsReady(setIsLoading) {
  const isBrowser = typeof document != "undefined";

  if (isBrowser) {
    const ready = await document.fonts.ready;
    console.log(ready);
    setIsLoading(false);
  }
}
