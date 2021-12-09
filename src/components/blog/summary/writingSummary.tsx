import React from "react";
import Summary from "./summary";
import { useAllWritingPosts } from "../../../utilities/hooks/allWriting";

export default function WritingSummary() {
  const allPosts = useAllWritingPosts().nodes.filter(
    (n) => n.frontmatter.titleLink != "/writing"
  );

  return <Summary data={allPosts} pathname="/writing" className="" />;
}
