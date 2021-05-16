import React, { FC } from "react";
import cn from "classnames";

import OutsideLinkIcon from "./OutsideLinkIcon";

type Props = {
  url: string;
  className: string;
};

const ReadButton: FC<Props> = ({ url, className }) => {
  return (
    <a href={url} className={cn(className, "button")}>
      <span>Read now </span>
      <OutsideLinkIcon />
    </a>
  );
};

export default ReadButton;
