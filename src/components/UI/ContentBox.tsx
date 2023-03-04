import React, { FC, ReactElement } from "react";
import { ContentBoxProps } from "../../types/componentsProps.types";

const ContentBox: FC<ContentBoxProps> = ({ children, defaultPadding }) => {
  return (
    <article
      className={`${
        defaultPadding ? "px-4 py-6 md:px-6 mt-6" : "pt-6"
      } border-[1.5px] rounded-md flex-1 w-full`}
    >
      {children}
    </article>
  );
};

export default ContentBox;
