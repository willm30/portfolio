import { PageProps } from "gatsby";
import React from "react";
import CentrePiece from "../components/layout/center/centrepiece";
import Scaffold from "../components/layout/scaffold";
export default function PageTemplate({
  blogPostData,
  location,
}: {
  blogPostData: any;
  location: PageProps["location"];
}) {
  const { frontmatter } = blogPostData.post;
  return (
    <Scaffold location={location} title={frontmatter.metaTitle}>
      <CentrePiece location={location} blogPostData={blogPostData} />
    </Scaffold>
  );
}
