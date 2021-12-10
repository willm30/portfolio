import { graphql, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CentrePiece from "../components/layout/center/centrepiece";
import Scaffold from "../components/layout/scaffold";
import { FirstRenderContext } from "../context/firstRender";
import { areFontsReady } from "../utilities/fonts";
import WaitingPage from "./waitingPage";
export default function PageTemplate({
  data,
  location,
  pageContext,
}: {
  data: any;
  pageContext: any;
  location: PageProps["location"];
}) {
  const { frontmatter } = data.post;
  const [isLoading, setIsLoading] = useState(true);
  const [firstRender] = useContext(FirstRenderContext);

  useEffect(() => {
    areFontsReady(setIsLoading, false);
  }, []);

  return firstRender === null && isLoading ? (
    <WaitingPage />
  ) : (
    <Scaffold location={location} title={frontmatter.metaTitle}>
      <CentrePiece {...{ data, pageContext, location }} />
    </Scaffold>
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
