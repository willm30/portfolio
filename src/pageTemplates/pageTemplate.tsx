import { PageProps } from "gatsby";
import React from "react";
import CentrePiece from "../components/layout/center/centrepiece";
import Scaffold from "../components/layout/scaffold";
export default function PageTemplate({
  blogPostData,
  location,
  pageContext,
}: {
  blogPostData: any;
  pageContext: any;
  location: PageProps["location"];
}) {
  const { frontmatter } = blogPostData.post;
  console.log("pageTemplate");
  return (
    <Scaffold location={location} title={frontmatter.metaTitle}>
      <CentrePiece {...{ blogPostData, pageContext, location }} />
    </Scaffold>
  );
}
