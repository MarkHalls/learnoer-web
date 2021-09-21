export type Action =
  | { type: "toggleLoginModal" }
  | {
      type: "loggedIn";
      user: {
        username: string;
        profileImg: string;
      };
    };
