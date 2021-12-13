import React from "react";
import NextPost from "../../../../buttons/nextPost";

export default function WritingFooter({ prevPost, nextPost, pathname }) {
  const isMobile = typeof window != "undefined" && window.innerWidth < 768;
  const left = isMobile
    ? ""
    : prevPost == "writing"
    ? "All Posts"
    : "Previous Post";
  const right = isMobile ? "" : "Next Post";
  return (
    <div className="flex w-1/2 flex-auto flex-shrink-0 md:justify-between">
      {prevPost && (
        <NextPost
          url={`/${prevPost}`}
          pathname={pathname}
          className="w-full md:w-auto"
          linkClass="md:mx-0 mx-2"
        >
          &larr; {left}
        </NextPost>
      )}
      {nextPost && (
        <NextPost
          url={`/${nextPost}`}
          pathname={pathname}
          className="w-full md:w-auto"
          linkClass="md:mx-0 mx-2"
        >
          {right} &rarr;
        </NextPost>
      )}
    </div>
  );
}
