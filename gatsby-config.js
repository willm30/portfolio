module.exports = {
  siteMetadata: {
    siteUrl: "https://willmart.in",
    title: "WM",
    image: "/images/profile-pic.png",
    logo: "/images/logo.png",
    description: "William Martin's personal website and portfolio.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "copy",
        path: "./src/copy",
      },
      __key: "copy",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-portal",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "flex justify-center items-center mx-2",
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-env-variables`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `wmportfolio`,
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Merriweather",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Merriweather",
          },
        ],
      },
    },
  ],
};
