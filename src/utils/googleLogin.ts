type GoogleResponse = {
  clientId: string;
  credential: string;
  select_by: string;
};

const handleGoogleSignIn = (res: GoogleResponse) => {
  console.log(res);
};

const initializeWithPrompt = (gsi: GSI) => {
  gsi.accounts.id.initialize({
    client_id: process.env.GOOGLE_CLIENT_ID,
    callback: handleGoogleSignIn,
  });

  gsi.accounts.id.prompt(); //display the One Tap dialog
};

const renderButton = (selector: string) => {
  const element = document.getElementsByClassName(selector)[0] as HTMLElement;

  if (window.google && element) {
    window.google.accounts.id.renderButton(
      element,
      { theme: "outline", size: "large" } // customization attributes
    );
  }
};

const googleLogin = () => {
  if (window.google) {
    initializeWithPrompt(window.google);
  } else {
    window.onGoogleLibraryLoad = () => initializeWithPrompt(window.google);
  }
};

export { googleLogin, renderButton };
