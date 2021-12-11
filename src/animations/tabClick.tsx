import { navigate } from "gatsby";
import gsap from "gsap";

export function navigateOut(tl, target, url) {
  return tl.to(target, {
    y: function (_, target) {
      const targetBottom = target.getBoundingClientRect().bottom;
      return -targetBottom;
    },
    duration: 1,
    ease: "power3.in",
    onComplete: navigate,
    onCompleteParams: [url],
  });
}

export function navigateIn(tl, target) {
  return tl
    .set(target, {
      y: function (_, target) {
        const windowHeight = window.innerHeight;
        const targetY = target.getBoundingClientRect().y;
        return windowHeight - targetY;
      },
    })
    .to(target, {
      y: 0,
      duration: 1.5,
      ease: "power3",
      visibility: "visible",
    });
}

export function centerIn() {
  const centerRoot =
    typeof window != "undefined" && document.getElementById("center-root");
  const tl = gsap.timeline();
  navigateIn(tl, centerRoot);
}

export function setVisible(target) {
  gsap.set(target, {
    y: 0,
    visibility: "visible",
  });
}

export function centerOut(url) {
  const centerRoot =
    typeof window != "undefined" && document.getElementById("center-root");
  const tl = gsap.timeline();
  navigateOut(tl, centerRoot, url);
}

export function centerOn() {
  const centerRoot =
    typeof window != "undefined" && document.getElementById("center-root");
  setVisible(centerRoot);
}
