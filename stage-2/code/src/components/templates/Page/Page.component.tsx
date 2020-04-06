import * as React from "react";
import { useHistory } from "react-router";

import store from "store";
import { constants } from "config";

interface PageProps {
  children: React.ReactNode;
  isProtected?: boolean;
}

function Page(props: PageProps): JSX.Element {
  const { children, isProtected } = props;
  const { state } = React.useContext(store);
  const history = useHistory();

  if (isProtected && !state.auth.loggedIn) {
    history.push(constants.ROUTES.LOGIN);
  }

  return (
    <div>
      <p>shit</p>
      {children}
    </div>
  );
}

export default Page as React.FC<PageProps>;
