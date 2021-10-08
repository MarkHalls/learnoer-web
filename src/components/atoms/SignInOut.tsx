import React, { FC } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import { useAppContext } from "../../appState";
import { Action } from "../../appState/actions";

import LoginModal from "../atoms/LoginModal";
import Portal from "../atoms/Portal";

type Props = {
  className?: string;
};

const SignInOut: FC<Props> = ({ className }) => {
  const [state, dispatch] = useAppContext();

  const handleClick = () => {
    dispatch({ type: "togglePortal", name: "loginModal" });
  };

  return (
    <>
      <button
        className={cn(className, `${className}-button`)}
        onClick={handleClick}
      >
        Login
      </button>
      <Portal portalName="loginModal">
        <LoginModal className={cn(className, `${className}-LoginModal`)} />
      </Portal>
    </>
  );
};

export default SignInOut;
