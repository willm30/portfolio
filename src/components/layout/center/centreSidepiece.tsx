import React from "react";

export default function CentreSidepiece({ children, left }) {
  const placement = `${
    left ? "md:col-start-1 md:col-end-2" : "md:col-start-3 md:col-end-4"
  } md:row-start-1 md:row-end-2`;

  const styles = {
    desktop: "md:mx-4 md:w-full md:max-w-[200px]",
    mobile: "row-start-2 row-end-3 col-start-2 col-end-3 mx-2 w-[50%]",
  };

  return (
    <div
      id={`side${left ? "left" : "right"}`}
      className={`${placement} flex flex-col justify-center ${styles.desktop} ${styles.mobile}`}
    >
      {children}
    </div>
  );
}
