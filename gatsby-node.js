const path = require("path"); // eslint-disable-line

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const dummy = path.resolve(`src/pageTemplates/dummy.tsx`);

  return graphql(
    `
      query WritingMdx {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

    const { nodes: allPosts } = result.data.allMdx;

    function removeTrailingSlash(slug) {
      const regex = /.*\/$/;
      const path = regex.test(slug) ? slug.slice(0, -1) : slug;
      return path;
    }
    allPosts.forEach((node) => {
      const { id, slug } = node;
      const path = removeTrailingSlash(slug);
      createPage({
        path: `/${path}`,
        component: dummy,
        context: {
          id,
        },
      });
    });
  });
};
