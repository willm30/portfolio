import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot =
  typeof document != "undefined" ? document.getElementById("portal") : null;

export default function Portal({ children }) {
  const el =
    typeof document != "undefined" ? document.createElement("div") : null;

  if (el) {
    el.id = "portal-root-child";
  }

  useEffect(() => {
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, []);

  if (el) return ReactDOM.createPortal(children, el);
  return null;
}
