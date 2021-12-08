import { Link } from "gatsby";
import React from "react";
import ContentHeading from "./contentHeading";

export default function ContentTitle({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return href.includes("http") ? (
    <a href={href}>
      <ContentHeading>{title}</ContentHeading>
    </a>
  ) : (
    <Link to={href}>
      <ContentHeading>{title}</ContentHeading>
    </Link>
  );
}
