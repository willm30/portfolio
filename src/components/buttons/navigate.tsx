import { Link, navigate } from "gatsby";
import React, { useContext } from "react";
import { centerOut } from "../../animations/tabClick";
import { TabNavigationContext } from "../../context/tabNavigation";

export default function NavigateButton({
  children,
  url,
  pathname,
  className,
  linkClass,
}) {
  const [, setIsTabNavigation] = useContext(TabNavigationContext);
  const isBrowser = typeof window != "undefined";
  const isMobile = isBrowser && window.innerWidth < 768;

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (pathname != url) {
      if (!prefersReducedMotion && !isMobile) {
        setIsTabNavigation(true);
        centerOut(url);
      } else {
        navigate(url);
      }
    }
  }

  return (
    <Link
      to={`${url}`}
      onClick={(e) => e.preventDefault()}
      className={linkClass}
    >
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </Link>
  );
}
