import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
import Scaffold from "../components/layout/scaffold";
import WaitingPage from "./waitingPage";
export default function PageTemplate({
  data,
  location,
  pageContext,
}: {
  data: any;
  pageContext: PageProps["pageContext"];
  location: PageProps["location"];
}) {
  const { frontmatter } = data.post;
  const isBrowser = typeof window != "undefined";
  const fontsLoaded = isBrowser && window.sessionStorage.getItem("fontsLoaded");
  const [, setHaveFontsLoaded] = useState();
  const isMobile = isBrowser && window.innerWidth < 768;

  return (
    <Scaffold
      location={location}
      title={frontmatter.metaTitle}
      data={data}
      pageContext={pageContext}
    />
  );
}

export const query = graphql`
  query Blogs($id: String!, $imgRegex: String!) {
    post: mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        titleLink
        metaTitle
        videoLink
        imgRegex
      }
      wordCount {
        words
      }
      timeToRead
      tableOfContents
    }
    imgFull: allImageSharp(
      filter: { fixed: { originalName: { regex: $imgRegex } } }
    ) {
      nodes {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        fixed {
          originalName
        }
      }
    }
    imgThumbnail: allImageSharp(
      filter: { fixed: { originalName: { regex: $imgRegex } } }
    ) {
      nodes {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
        fixed {
          originalName
        }
      }
    }
  }
`;
function setOrientation(type: string) {
  throw new Error("Function not implemented.");
}
