import * as React from "react";

import store from "store";

import { Icon, Page } from "components";

function HomePage(): JSX.Element {
  const { state } = React.useContext(store);

  return (
    <Page isProtected>
      <p>{state.auth.loggedIn ? "yes" : "no"}</p>
      <Icon name="dribbble" />
    </Page>
  );
}

export default HomePage as React.FC;
