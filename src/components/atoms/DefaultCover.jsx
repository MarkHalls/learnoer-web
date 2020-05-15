import React from "react";

const DefaultCover = ({ className }) => {
  return (
    <svg
      width="100"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 4h92v92H4V4z" fill="#C4C4C4" />
      <path
        d="M5.5 13S42.84 19 45 28c2.16 9-13.788 15.1-7.5 26C45 67 68.235 50.5 74 64.5 81.864 83.598 5.5 87 5.5 87M61 5.5c2.28 23.514 9.778 31.042 34 34.5M4 4h92v92H4V4z"
        stroke="#939393"
        strokeWidth="8"
      />
    </svg>
  );
};

export default DefaultCover;
