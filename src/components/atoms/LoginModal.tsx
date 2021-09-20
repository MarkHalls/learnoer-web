import React, { FC, useEffect } from "react";
import cn from "classnames";

import "./LoginModal.less";

type Props = {
  className: string;
  onClose: Function;
};

const LoginModal: FC<Props> = ({ className, onClose }) => {
  const handleGoogleSignIn = (res: any) => {
    console.log(res);
  };

  const handleExitClick = () => {
    onClose();
  };

  useEffect(() => {
    const element = document.getElementsByClassName(
      "googleButton"
    )[0] as HTMLElement;

    if (window.google && element) {
      window.google.accounts.id.renderButton(
        element,
        { theme: "outline", size: "large" } // customization attributes
      );
    }
  }, [handleGoogleSignIn, window.onGoogleLibraryLoad]);

  return (
    <div className={cn("modal")} onClick={handleExitClick}>
      <div className={cn("modal-content")}>
        <div className={cn("googleButton")}></div>;
      </div>
    </div>
  );
};

export default LoginModal;
