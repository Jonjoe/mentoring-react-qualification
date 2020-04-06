export interface LoginAction {
  type: "action.auth.login";
  payload: null;
}

export function login(): LoginAction {
  return {
    type: "action.auth.login",
    payload: null
  };
}

export interface LogoutAction {
  type: "action.auth.logout";
  payload: null;
}

export function logout(): LogoutAction {
  return {
    type: "action.auth.logout",
    payload: null
  };
}

export type AppActions = LoginAction | LogoutAction;

export default {
  login,
  logout
};
