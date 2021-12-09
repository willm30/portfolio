import { graphql } from "gatsby";
import React from "react";

export default function Dummy({ data }) {
  return <div>{data.post.frontmatter.title}</div>;
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
