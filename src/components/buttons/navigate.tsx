import { Link, navigate } from "gatsby";
import React, { useContext } from "react";
import { centerOut, navigateOut } from "../../animations/tabClick";
import { TabNavigationContext } from "../../context/tabNavigation";

export default function NavigateButton({ children, url, pathname, className }) {
  const [, setIsTabNavigation] = useContext(TabNavigationContext);

  function handleClick() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (pathname != url) {
      if (!reducedMotion) {
        setIsTabNavigation(true);
        centerOut(url);
      } else {
        navigate(url);
      }
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      <Link to={`${url}`} onClick={(e) => e.preventDefault()}>
        {children}
      </Link>
    </button>
  );
}
