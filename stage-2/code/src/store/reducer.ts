import { AppState } from "./";
import { AppActions } from "./actions";

function appReducer(oldState: AppState, action: AppActions): AppState {
  let newState;

  switch (action.type) {
    case "action.auth.login":
      newState = {
        ...oldState,
        auth: {
          loggedIn: true
        }
      };

      break;

    case "action.auth.logout":
      newState = {
        ...oldState,
        auth: {
          loggedIn: false
        }
      };

      break;

    default:
      newState = {
        ...oldState
      };
  }

  console.log("________________________");
  console.log("----", action.type);
  console.log("---- oldState", oldState);
  console.log("---- newState", newState);

  return newState;
}

export default appReducer;
