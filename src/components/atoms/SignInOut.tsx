import React, { FC, useEffect, useState } from "react";
import cn from "classnames";

type Props = {
  className?: string;
};

const SignInOut: FC<Props> = ({ className }) => {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);

  const handleGoogleSignIn = () => {};

  useEffect(() => {
    const element = document.getElementsByClassName(
      className as string
    )[0] as HTMLElement;

    if (window.google && element) {
      window.google.accounts.id.initialize({
        client_id: process.env.GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(
        element,
        { theme: "outline", size: "large" } // customization attributes
      );

      window.google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, [handleGoogleSignIn]);

  return <div className={cn(className)}></div>;
};

export default SignInOut;
