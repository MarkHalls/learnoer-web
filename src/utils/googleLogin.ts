const handleGoogleSignIn = (res: any) => {
  console.log(res);
};

const initializeWithPrompt = (gsi: GSI) => {
  gsi.accounts.id.initialize({
    client_id: process.env.GOOGLE_CLIENT_ID,
    callback: handleGoogleSignIn,
  });

  gsi.accounts.id.prompt(); //display the One Tap dialog
};

const googleLogin = () => {
  if (window.google) {
    initializeWithPrompt(window.google);
  } else {
    window.onGoogleLibraryLoad = () => initializeWithPrompt(window.google);
  }
};

export { googleLogin };
