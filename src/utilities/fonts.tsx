export async function areFontsReady(setIsLoading) {
  await document.fonts.ready;
  setIsLoading(false);
}
