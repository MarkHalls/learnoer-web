import React, { FC } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import { useAppContext } from "../../appState";
import { Action } from "../../appState/actions";

import LoginModal from "../atoms/LoginModal";

type Props = {
  className?: string;
};

const SignInOut: FC<Props> = ({ className }) => {
  const [state, dispatch] = useAppContext();

  const handleClick = () => {
    dispatch({ type: "toggleLoginModal" });
  };

  return (
    <>
      <button
        className={cn(className, `${className}-button`)}
        onClick={handleClick}
      >
        Login
      </button>
      {state.showLoginModal &&
        ReactDOM.createPortal(
          <LoginModal className={cn(className, `${className}-LoginModal`)} />,
          document.getElementById("root") as Element
        )}
    </>
  );
};

export default SignInOut;
