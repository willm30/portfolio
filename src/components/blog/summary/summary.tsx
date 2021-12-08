import React from "react";
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
