import React from "react";
import ContentTitle from "./contentTitle/contentTitleTemplate";
import ContentBody from "./contentBody";
import ContentMetaData from "./contentMetaData";
import DisqusComments from "../../../blog/disqus/disqus";
import { borderLight, scrollDefault } from "../../../../styles/common";
import useKeydownListener from "../../../../utilities/hooks/useKeydownListener";

export default function ContentTemplate({
  post,
  pathname,
}: {
  post: any;
  pathname: string;
}) {
  const { frontmatter, wordCount, id } = post;
  const { title } = frontmatter;
  const isWriting = pathname.includes("writing/");
  useKeydownListener("content-template");

  return (
    <div
      id="content-template"
      className={`p-4 md:mt-8 border-2 ${borderLight} overflow-y-scroll ${scrollDefault} smooth-scroll max-h-full`}
    >
      <ContentTitle href={frontmatter.titleLink} title={title} />
      {pathname.includes("writing/") ? (
        <ContentMetaData
          date={frontmatter.date}
          time={post.timeToRead}
          words={wordCount.words}
        />
      ) : null}
      <ContentBody paragraphs={post.body} />
      {isWriting && <DisqusComments {...{ title, pathname, id }} />}
    </div>
  );
}
