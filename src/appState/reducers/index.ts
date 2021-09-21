import { Action } from "../actions";

export type AppState = {
  loggedIn: boolean;
  showLoginModal: boolean;
  user?: {
    username: string;
    profileImg: string;
  };
};

export const initialState = {
  loggedIn: false,
  showLoginModal: false,
};

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "toggleLoginModal": {
      return { ...state, showLoginModal: !state.showLoginModal };
    }
    case "loggedIn": {
      return { ...state, showLoginModal: false, user: action.user };
    }
    default: {
      return state;
    }
  }
};
