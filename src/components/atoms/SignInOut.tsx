import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import LoginModal from "../atoms/LoginModal";

type Props = {
  className?: string;
};

const SignInOut: FC<Props> = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className={cn(className, `${className}-button`)}
        onClick={handleClick}
      >
        Login
      </button>
      {showModal &&
        ReactDOM.createPortal(
          <LoginModal
            className={cn(className, `${className}-LoginModal`)}
            onClose={handleClick}
          />,
          document.getElementById("root") as Element
        )}
    </>
  );
};

export default SignInOut;
