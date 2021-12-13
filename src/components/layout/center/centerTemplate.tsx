import React from "react";
import ContentTemplate from "./content/contentTemplate";

export default function CenterTemplate({ post, pathname }) {
  const placement =
    "col-start-1 col-end-3 row-start-2 row-end-3 md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-3";

  const styles = {
    desktop: "md:order-none",
    mobile: "",
  };
  return (
    <div
      id="center-container"
      className={`${placement} invisible flex flex-col justify-center items-center min-h-[500px] md:min-h-0 md:max-h-[695px] ${styles.desktop} ${styles.mobile}`}
    >
      <ContentTemplate {...{ post, pathname }} />
    </div>
  );
}
