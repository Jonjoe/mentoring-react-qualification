import React, { useReducer } from "react";

import appReducer from "./reducer";
import { AppContext, initialState } from "./context";

export interface AppState {
  auth: {
    loggedIn: boolean;
  };
}

export const AppProvider = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const { children } = props;

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { default as actions } from "./actions";

export default AppContext;
