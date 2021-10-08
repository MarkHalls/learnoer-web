import { Action } from "../actions";

export type AppState = {
  loggedIn: boolean;
  loginModal: boolean;
  user?: {
    username: string;
    profileImg: string;
  };
};

export const initialState = {
  loggedIn: false,
  loginModal: false,
};

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "togglePortal": {
      return { ...state, [action.name]: !state[action.name] };
    }
    case "loggedIn": {
      return { ...state, loginModal: false, user: action.user };
    }
    default: {
      return state;
    }
  }
};
