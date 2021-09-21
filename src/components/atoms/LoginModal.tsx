import React, { FC, useEffect } from "react";
import cn from "classnames";

import { useAppContext } from "../../appState";

import { renderButton } from "../../utils/googleLogin";

import "./LoginModal.less";

type Props = {
  className: string;
};

const LoginModal: FC<Props> = ({ className }) => {
  const [state, dispatch] = useAppContext();

  const handleExitClick = () => {
    dispatch({ type: "toggleLoginModal" });
  };

  useEffect(() => {
    renderButton("googleButton");
  }, []);

  return (
    <div className={cn("modal")} onClick={handleExitClick}>
      <div className={cn("modal-content")}>
        <div className={cn("googleButton")}></div>;
      </div>
    </div>
  );
};

export default LoginModal;
