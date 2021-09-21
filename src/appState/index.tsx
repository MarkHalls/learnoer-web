//special thanks to https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
import React, { useContext, useReducer, Dispatch } from "react";
import { Action } from "./actions";

import { reducer, initialState, AppState } from "./reducers";

const DispatchContext = React.createContext<Dispatch<Action>>(() => null);
const StateContext = React.createContext<AppState>(initialState);

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useAppContext = (): [state: AppState, dispatch: Dispatch<Action>] => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return [state, dispatch];
};

export { AppProvider, useAppContext };
