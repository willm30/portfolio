import { navigate } from "gatsby";
import gsap from "gsap";

export function navigateOut(tl, target, url) {
  const centerFooter = document.getElementById("center-footer");

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
  const centerFooter = document.getElementById("center-footer");

  return tl
    .set([...target, centerFooter], {
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
  const centerCont = document.getElementById("center-container");
  const centerRight = document.getElementById("center-right");
  const centerLeft = document.getElementById("center-left");

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
  const centerCont = document.getElementById("center-container");
  const centerRight = document.getElementById("center-right");
  const centerLeft = document.getElementById("center-left");

  const tl = gsap.timeline();
  navigateOut(tl, [centerCont, centerRight, centerLeft], url);
}

export function centerOn() {
  const centerCont = document.getElementById("center-container");
  const centerRight = document.getElementById("center-right");
  const centerLeft = document.getElementById("center-left");
  const centerFooter = document.getElementById("center-footer");

  setVisible([centerCont, centerRight, centerLeft, centerFooter]);
}
