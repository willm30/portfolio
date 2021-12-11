import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { mdxStyles } from "../../../../styles/mdxStyles";

export default function ContentBody({ paragraphs }) {
  return (
    <article id="text-container" className="text-justify">
      <MDXProvider components={mdxStyles}>
        <MDXRenderer>{paragraphs}</MDXRenderer>
      </MDXProvider>
    </article>
  );
}
