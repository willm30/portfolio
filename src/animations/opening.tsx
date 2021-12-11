import gsap from "gsap";
import { centerIn } from "./tabClick";

function openingAnimation() {
  const tl = gsap.timeline();
  const W = document.getElementById("W-initial");
  const M = document.getElementById("M-initial");
  const left = document.getElementById("left-group");
  const right = document.getElementById("right-group");
  const x = 2.5;
  tl.set(W, {
    x: function () {
      return window.innerWidth / x;
    },
  })
    .set(M, {
      x: function () {
        return -(window.innerWidth / x);
      },
    })
    .set(left, {
      xPercent: -100,
    })
    .set(right, {
      xPercent: 100,
    })
    .to(
      [W, M],
      {
        x: 0,
        visibility: "visible",
        duration: 1.5,
        ease: "power1.inOut",
      },
      ">1"
    )
    .to(
      [left, right],
      {
        xPercent: 0,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        onComplete: delayIn,
        onCompleteParams: [500],
      },
      ">"
    );
}

function openingAnimationMobile() {
  const tl = gsap.timeline();
  const left = document.getElementById("left-group");
  const right = document.getElementById("right-group");
  const home = document.getElementById("home-button");
  tl.set([left, home], {
    xPercent: -100,
  })
    .set(right, {
      xPercent: 100,
    })
    .to(
      [left, right, home],
      {
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
        onComplete: delayIn,
        onCompleteParams: [500],
      },
      ">"
    );
}

function delayIn(time_ms: number) {
  setTimeout(centerIn, time_ms);
}

export function runOpeningAnimation() {
  if (window.innerWidth < 768) {
    openingAnimationMobile();
  } else {
    openingAnimation();
  }
}
