export function isScreenMobile() {
  return isInBrowser() && window.innerWidth < 768;
}

export function isInBrowser() {
  return typeof window != "undefined";
}
