import React from "react";

const UserAvatar = () => {
  return (
    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <circle cx="24" cy="24" r="24" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#9F9A94" d="M0 0h48v48H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.849 26.039a11.253 11.253 0 004.228-8.819C35.077 11.023 30.117 6 24 6c-6.118 0-11.077 5.023-11.077 11.22 0 3.578 1.653 6.765 4.228 8.819C11.741 28.647 8 34.249 8 40.739 8 49.72 15.163 57 24 57s16-7.28 16-16.26c0-6.49-3.741-12.093-9.151-14.701z"
          fill="#fff"
        />
        <circle cx="24" cy="24" r="23.5" stroke="#000" stroke-opacity=".1" />
      </g>
    </svg>
  );
};

export default UserAvatar;
