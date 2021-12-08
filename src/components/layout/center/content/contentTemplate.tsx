import React from "react";
import ContentTitle from "./contentTitle/contentTitleTemplate";
import ContentBody from "./contentBody";
import ContentMetaData from "./contentMetaData";
import DisqusComments from "../../../blog/disqus/disqus";

export default function ContentTemplate({
  blogPost,
  pathname,
}: {
  blogPost: any;
  pathname: string;
}) {
  const { frontmatter, wordCount, id } = blogPost;
  const { title } = frontmatter;
  return (
    <div>
      <ContentTitle href={frontmatter.titleLink} title={title} />
      {pathname.includes("writing/") ? (
        <ContentMetaData
          date={frontmatter.date}
          time={blogPost.timeToRead}
          words={wordCount.words}
        />
      ) : null}
      <ContentBody paragraphs={blogPost.body} />
      {pathname.includes("writing/") ? (
        <DisqusComments {...{ title, pathname, id }} />
      ) : null}
    </div>
  );
}
