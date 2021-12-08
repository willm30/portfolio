import gsap from "gsap";
import { navigateIn } from "./tabClick";

export function modalAnimation(target) {
  const tl = gsap.timeline();

  navigateIn(tl, target);
}
