import { useEffect, useState } from "react";

export function useOverflowEffect(containerId) {
  const [hasOverflowed, setHasOverflowed] = useState(false);

  console.log("rendering?");
  useEffect(() => {
    console.log("overflow effect");
    const container = document.getElementById(containerId);
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    window.addEventListener("resize", checkHasOverflowed);
    checkHasOverflowed();
    return () => window.removeEventListener("resize", checkHasOverflowed);

    function checkHasOverflowed() {
      console.log("hasOverflowed?", scrollHeight > clientHeight);
      if (scrollHeight > clientHeight) setHasOverflowed(true);
      else setHasOverflowed(false);
    }
  }, []);

  return hasOverflowed;
}
