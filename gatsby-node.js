const path = require("path"); // eslint-disable-line

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/pageTemplates/default.tsx`);

  return graphql(
    `
      query WritingMdx {
        allMdx {
          nodes {
            id
            slug
            frontmatter {
              imgRegex
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    console.log(result, "result");
    result.data.allMdx.nodes.forEach((node) => {
      console.log(node, "node");
      const { id, frontmatter, slug } = node;
      const { imgRegex } = frontmatter;
      createPage({
        // Path for this page — required
        path: `/${slug}`,
        component: blogPostTemplate,
        context: {
          id,
          imgRegex: `/${imgRegex}/`,
        },
      });
    });
  });
};
