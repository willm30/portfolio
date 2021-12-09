const path = require("path"); // eslint-disable-line

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/pageTemplates/default.tsx`);

  return graphql(
    `
      query WritingMdx {
        all: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            id
            slug
            frontmatter {
              imgRegex
            }
          }
        }
        writing: allMdx(
          filter: { slug: { regex: "/writing//" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const { nodes: allPosts } = result.data.all;
    const { nodes: allWriting } = result.data.writing;
    const allWritingIds = allWriting.map((n) => n.id);
    const last = allWriting.length - 1;

    function removeTrailingSlash(slug) {
      const regex = /.*\/$/;
      const path = regex.test(slug) ? slug.slice(0, -1) : slug;
      return path;
    }
    allPosts.forEach((node) => {
      const { id, frontmatter, slug } = node;
      const { imgRegex } = frontmatter;
      const index = allWritingIds.indexOf(id);
      const path = removeTrailingSlash(slug);
      createPage({
        path: `/${path}`,
        component: blogPostTemplate,
        context: {
          id,
          imgRegex: `/${imgRegex}/`,
          nextPost:
            index > -1
              ? index > 0
                ? removeTrailingSlash(allWriting[index - 1].slug)
                : ""
              : "",
          previousPost:
            index > -1
              ? index < last
                ? removeTrailingSlash(allWriting[index + 1].slug)
                : ""
              : "",
        },
      });
    });
  });
};
