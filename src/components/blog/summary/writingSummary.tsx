import React from "react";
import Summary from "./summary";
import { graphql, useStaticQuery } from "gatsby";

export default function WritingSummary() {
  const { allMdx } = useStaticQuery(
    graphql`
      query WritingMdx {
        allMdx(
          filter: { slug: { regex: "/writing/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            id
            slug
            timeToRead
            frontmatter {
              title
              titleLink
              date(formatString: "DD MMMM YYYY")
            }
          }
        }
      }
    `
  );
  const allPosts = allMdx.nodes.filter(
    (n) => n.frontmatter.titleLink != "/writing"
  );

  return <Summary data={allPosts} pathname="/writing" className="" />;
}
