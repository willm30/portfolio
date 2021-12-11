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
    <>
      {prevPost && (
        <NextPost
          url={`/${prevPost}`}
          pathname={pathname}
          className="flex justify-center items-center w-full md:w-auto"
        >
          &larr; {left}
        </NextPost>
      )}
      {nextPost && (
        <NextPost
          url={`/${nextPost}`}
          pathname={pathname}
          className="flex justify-center items-center w-full md:w-auto"
        >
          {right} &rarr;
        </NextPost>
      )}
    </>
  );
}
