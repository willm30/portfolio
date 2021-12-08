import React, { useEffect } from "react";

export function useOverflowEffect(containerRef, setState) {
  useEffect(() => {
    window.addEventListener("resize", checkHasOverflowed);
    checkHasOverflowed();
    return () => window.removeEventListener("resize", checkHasOverflowed);
  }, []);

  function checkHasOverflowed() {
    if (containerRef.current.scrollHeight > containerRef.current.clientHeight) {
      setState(true);
    } else {
      setState(false);
    }
  }
}
