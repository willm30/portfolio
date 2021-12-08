import { Link, navigate } from "gatsby";
import React, { useContext } from "react";
import { centerOut } from "../../animations/tabClick";
import { TabNavigationContext } from "../../context/tabNavigation";

export default function NavigateButton({ children, url, pathname, className }) {
  const [, setIsTabNavigation] = useContext(TabNavigationContext);
  const reducedMotion =
    typeof window != "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function handleClick() {
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
