import { useEffect, useState } from "react";

export default function useKeydownListener(containerId) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = document.getElementById(containerId);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

    function handleKeyDown(e) {
      const y = 75;
      if (e.key == "ArrowDown") handleScroll(container, 0, y);
      else if (e.key == "ArrowUp") handleScroll(container, 0, -y);
    }
  }, [scrollY]);

  function handleScroll(cont: HTMLElement, x: number, y: number) {
    cont.scrollBy(x, y);
    setScrollY(cont.scrollTop);
  }
}
