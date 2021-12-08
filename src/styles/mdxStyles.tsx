import { bgLight, textDark, textLarge } from "./common";
import React from "react";

export const mdxStyles = {
  p: (props) => <p {...props} className="my-4" />,
  code: (props) => <code {...props} className={`${bgLight} ${textDark}`} />,
  h2: (props) => (
    <h2
      {...props}
      className={`${textLarge} ${bgLight} ${textDark} flex w-max font-bold my-1`}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={`${bgLight} ${textDark} flex w-max font-bold my-1`}
    />
  ),
  li: (props) => <li {...props} className="pl-2 list-ordered" />,
  ol: (props) => <ol {...props} className="my-4" />,
};
