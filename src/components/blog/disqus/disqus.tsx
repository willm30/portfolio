import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import React, { useState } from "react";
import { SITEURL } from "../../../../env";
import SpanRev from "../elements/spanRev";

export default function DisqusComments({ pathname, id, title }) {
  const [showComments, setShowComments] = useState(false);
  const disqusConfig = {
    url: `${SITEURL + pathname}`,
    identifier: id,
    title,
  };

  const vis = showComments ? "Hide" : "Show";
  return (
    <>
      <button onClick={() => setShowComments(!showComments)}>
        <SpanRev>
          {vis} Comments (
          {<CommentCount config={disqusConfig} placeholder={"..."} />})
        </SpanRev>
      </button>
      {showComments ? <Disqus config={disqusConfig} /> : null}
    </>
  );
}
