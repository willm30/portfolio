import { navigate } from "gatsby";
import gsap from "gsap";

const isBrowser = typeof document != "undefined";

export function navigateOut(tl, target, url) {
  let centerFooter;

  if (isBrowser) centerFooter = document.getElementById("center-footer");

  return tl
    .to(target, {
      y: function (_, target) {
        const targetBottom = target.getBoundingClientRect().bottom;
        return -targetBottom;
      },
      duration: 1,
      ease: "power3.in",
    })
    .to(
      centerFooter,
      {
        y: function (_, target) {
          const targetBottom = target.getBoundingClientRect().bottom;
          return -targetBottom;
        },
        duration: 1,
        ease: "power3.in",
        onComplete: navigate,
        onCompleteParams: [url],
      },
      ">-0.95"
    );
}

export function navigateIn(tl, target) {
  let centerFooter;

  if (isBrowser) centerFooter = document.getElementById("center-footer");

  return tl
    .set([...target, centerFooter], {
      y: function (_, target) {
        const windowHeight =
          typeof window != "undefined" ? window.innerHeight : null;
        const targetY = target.getBoundingClientRect().y;
        return windowHeight - targetY;
      },
    })
    .to(target, {
      y: 0,
      duration: 1.5,
      ease: "power3",
      visibility: "visible",
    })
    .to(
      centerFooter,
      {
        y: 0,
        duration: 1,
        ease: "power3",
        visibility: "visible",
      },
      "<+=0.55"
    );
}

export function centerIn() {
  let centerCont, centerRight, centerLeft;

  if (isBrowser) {
    centerLeft = document.getElementById("center-container");
    centerRight = document.getElementById("center-right");
    centerLeft = document.getElementById("center-left");
  }

  const tl = gsap.timeline();
  navigateIn(tl, [centerCont, centerRight, centerLeft]);
}

function setVisible(target) {
  gsap.set(target, {
    y: 0,
    visibility: "visible",
  });
}

export function centerOut(url) {
  let centerCont, centerRight, centerLeft;

  if (isBrowser) {
    centerLeft = document.getElementById("center-container");
    centerRight = document.getElementById("center-right");
    centerLeft = document.getElementById("center-left");
  }

  const tl = gsap.timeline();
  navigateOut(tl, [centerCont, centerRight, centerLeft], url);
}

export function centerOn() {
  let centerCont;
  let centerRight;
  let centerLeft;
  let centerFooter;

  if (isBrowser) {
    centerCont = document.getElementById("center-container");
    centerRight = document.getElementById("center-right");
    centerLeft = document.getElementById("center-left");
    centerFooter = document.getElementById("center-footer");
  }

  console.log(isBrowser, centerCont, centerRight, centerLeft, centerFooter);
  setVisible([centerCont, centerRight, centerLeft, centerFooter]);
}
