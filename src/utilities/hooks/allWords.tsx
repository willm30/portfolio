import { useStaticQuery, graphql } from "gatsby";
export function useAllWords() {
  const { allMdx } = useStaticQuery(
    graphql`
      query Words {
        allMdx {
          nodes {
            wordCount {
              words
            }
          }
        }
      }
    `
  );
  return allMdx;
}
