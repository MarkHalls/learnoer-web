import React, { FC } from "react";

type Props = {
  className?: string;
};

const SiteLogo: FC<Props> = ({ className }) => {
  return (
    <svg
      width="48"
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0a4 4 0 014 4 4 4 0 014 4 4
4 0 014 4v32a4 4 0 01-4 4H12l-8-8V0h28zm2 36a2 2 0 01-2 2H6V2h26a2 2 0 012
2v32zM7 40l2 2h27a2 2 0 002-2V8a2 2 0 00-2-2v30a4 4 0 01-4 4H7zm35 4a2 2 0 01-2
2H13l-2-2h25a4 4 0 004-4V10a2 2 0 012 2v32z"
        fill="#383430"
      />
    </svg>
  );
};

export default SiteLogo;
