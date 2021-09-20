type GSI = {
  accounts: {
    id: {
      initialize: (input: IdConfiguration) => void;
      prompt: (
        momentListener?: (res: PromptMomentNotification) => void
      ) => void;
      renderButton: (
        parent: HTMLElement,
        options: GsiButtonConfiguration,
        clickHandler?: Function
      ) => void;
      disableAutoSelect: Function;
      storeCredential: Function<{
        credentials: { id: string; password: string };
        callback: Function;
      }>;
      cancel: () => void;
      onGoogleLibraryLoad: Function;
      revoke: Function<{
        hint: string;
        callback: Function<{ successful: boolean; error: string }>;
      }>;
    };
  };
};

interface Window {
  onGoogleLibraryLoad?: Function;
  google?: gsi;
}
