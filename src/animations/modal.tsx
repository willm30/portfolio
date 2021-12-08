import gsap from "gsap";

const duration = 1.5;
export function modalAnimation(center, container) {
  const tl = gsap.timeline();

  navigateIn(tl, center);
  fadeInBg(container);
}

export function modalOut(target, onComplete, onCompleteParams, container) {
  modalExit(target, onComplete, onCompleteParams);
  fadeOutBg(container);
}

function fadeInBg(container) {
  gsap.to(container, {
    backgroundColor: "rgba(156, 163, 175, 0.5)",
    duration,
    ease: "power3",
  });
}

function fadeOutBg(container) {
  gsap.to(container, {
    backgroundColor: "rgba(31, 41, 55, 0)",
    duration: duration / 2,
    ease: "power3.in",
  });
}

function navigateIn(tl, target) {
  return tl
    .set(target, {
      y: function (_, target) {
        const windowHeight =
          typeof window != "undefined" ? window.innerHeight : null;
        const targetY = target.getBoundingClientRect().y;
        return windowHeight - targetY;
      },
    })
    .to(target, {
      y: 0,
      duration,
      ease: "power3",
      visibility: "visible",
    });
}

export function modalExit(target, onComplete, onCompleteParams) {
  return gsap.to(target, {
    y: function (_, target) {
      const windowHeight =
        typeof window != "undefined" ? window.innerHeight : null;
      const targetY = target.getBoundingClientRect().y;
      return windowHeight - targetY;
    },
    duration: duration / 2,
    ease: "power3.in",
    onComplete,
    onCompleteParams,
  });
}
