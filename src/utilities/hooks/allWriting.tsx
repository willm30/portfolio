/*
import { useStaticQuery, graphql } from "gatsby";
export function useAllWritingPosts() {
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
  return allMdx;
}
*/
