export type Action =
  | { type: "togglePortal"; name: PortalName }
  | {
      type: "loggedIn";
      user: {
        username: string;
        profileImg: string;
      };
    };

export type PortalName = "loginModal";
