import React, { FC } from "react";
import { Link } from "react-router-dom";

import DefaultCover from "./DefaultCover";

type Props = {
  bookKey: string;
  cover?: string;
  title: string;
  className: string;
};

const Cover: FC<Props> = ({ bookKey, cover, title, className }) => {
  return (
    <Link to={bookKey} className={className}>
      {cover ? (
        <img src={cover} alt={`${title} cover image`} />
      ) : (
        <DefaultCover />
      )}
    </Link>
  );
};

export default Cover;
