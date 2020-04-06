import * as React from "react";
import { useHistory } from "react-router";

import { constants } from "config";
import store, { actions } from "store";

import { Page, Input, Button } from "components";

function LoginPage(): JSX.Element {
  const { dispatch } = React.useContext(store);
  const history = useHistory();

  const handleLogin = (): void => {
    dispatch(actions.login());
    history.push(constants.ROUTES.HOME);
  };

  return (
    <Page>
      <p>Login</p>
      <Input />
      <Input />
      <Button label="a button" onClick={handleLogin} />
    </Page>
  );
}

export default LoginPage as React.FC;
