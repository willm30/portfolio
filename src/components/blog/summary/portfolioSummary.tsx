import React from "react";
import Summary from "./summary";
import { useAllPortfolioPosts } from "../../../utilities/hooks/allPortfolio";

export default function portfolioSummary() {
  const allPosts = useAllPortfolioPosts().nodes.filter(
    (n) => n.frontmatter.titleLink != "/work/portfolio"
  );

  return <Summary data={allPosts} pathname="/portfolio" className="" />;
}
