import React from "react";
import NextPost from "../../../../buttons/nextPost";

export default function WritingFooter({ prev, next, pathname }) {
  return (
    <>
      {prev && (
        <NextPost url={`/${prev}`} pathname={pathname}>
          &larr; {prev == "writing" ? "All Posts" : "Previous Post"}
        </NextPost>
      )}
      {next && (
        <NextPost url={`/${next}`} pathname={pathname}>
          Next Post &rarr;
        </NextPost>
      )}
    </>
  );
}
