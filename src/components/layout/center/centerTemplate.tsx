import React from "react";
import ContentTemplate from "./content/contentTemplate";

export default function CenterTemplate({ post, pathname }) {
  const placement =
    "md:col-start-2 md:col-end-3 col-start-1 col-end-3 row-start-1 row-end-2";

  const styles = {
    desktop: "md:order-none",
    mobile: "",
  };
  return (
    <div
      id="center-container"
      className={`${placement} flex max-w-[785px] flex-col justify-center items-center min-h-0 ${styles.desktop} ${styles.mobile}`}
    >
      <ContentTemplate {...{ post, pathname }} />
    </div>
  );
}
