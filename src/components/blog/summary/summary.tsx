import React from "react";
import { highlight } from "../../../styles/common";
import NavigateButton from "../../buttons/navigate";
import Li from "../elements/li";

export default function Summary({
  data,
  pathname,
  className,
}: {
  data: any[];
  pathname: string;
  className: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={`${highlight} my-4`}>Recent posts:</h2>
      {data.map((n) => {
        const { frontmatter } = n;
        return (
          <NavigateButton
            url={`/${n.slug}`}
            pathname={pathname}
            className={className}
            key={frontmatter.title}
          >
            <Li>{frontmatter.title}</Li>
          </NavigateButton>
        );
      })}
    </div>
  );
}
