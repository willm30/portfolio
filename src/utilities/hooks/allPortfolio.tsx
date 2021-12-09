import { useStaticQuery, graphql } from "gatsby";
export function useAllPortfolioPosts() {
  const { allMdx } = useStaticQuery(
    graphql`
      query WorkMdx {
        allMdx(
          filter: { slug: { regex: "/portfolio/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            id
            slug
            timeToRead
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
            }
          }
        }
      }
    `
  );
  return allMdx;
}
