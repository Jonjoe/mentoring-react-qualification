import { createContext } from "react";

import { AppState } from "./"
import { AppActions } from './actions'

export const initialState: AppState = {
  auth: {
    loggedIn: false
  }
};

interface AppContext {
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}

export const AppContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => null
});
