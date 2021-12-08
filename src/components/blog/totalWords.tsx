import React from "react";
import { useAllWords } from "../../utilities/hooks/allWords";

export default function TotalWords() {
  const allWords = useAllWords().nodes;
  console.log(allWords);
  const totalWordCount = allWords.reduce((p, c) => p + c.wordCount.words, 0);

  return (
    <span>{new Intl.NumberFormat("en-GB").format(totalWordCount)} words</span>
  );
}
