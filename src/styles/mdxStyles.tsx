import { highlight, textLarge, textSm } from "./common";
import React from "react";

export const mdxStyles = {
  p: (props) => <p {...props} className="my-4" />,
  code: (props) => <code {...props} className={`${highlight}`} />,
  h2: (props) => (
    <h2
      {...props}
      className={`${textLarge} ${highlight} flex w-max font-bold my-1`}
    />
  ),
  h3: (props) => (
    <h3 {...props} className={`${highlight} flex w-max font-bold my-1`} />
  ),
  h4: (props) => (
    <h4 {...props} className={`${textSm} ${highlight} w-max flex`} />
  ),
  li: (props) => <li {...props} className="pl-2 list-ordered" />,
  ol: (props) => <ol {...props} className="my-4" />,
  a: (props) => (
    <a
      {...props}
      className="underline inline-flex justify-center items-center"
    />
  ),
};
