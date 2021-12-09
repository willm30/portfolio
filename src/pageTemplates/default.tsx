import { graphql } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import PageTemplate from "../pageTemplates/pageTemplate";
import WaitingPage from "../pageTemplates/waitingPage";
import { FirstRenderContext } from "../context/firstRender";
import { areFontsReady } from "../utilities/fonts";

export default function Writing({ data, location, pageContext }) {
  const [isLoading, setIsLoading] = useState(true);
  const [firstRender] = useContext(FirstRenderContext);
  useEffect(() => {
    if (firstRender === null) {
      areFontsReady(setIsLoading);
    }
  }, []);

  //if (firstRender === null && isLoading) return <WaitingPage />;

  return (
    <PageTemplate
      blogPostData={data}
      location={location}
      pageContext={pageContext}
    />
  );
}

export const query = graphql`
  query Blogs($id: String!) {
    post: mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
      }
    }
  }
`;

/*
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
*/
