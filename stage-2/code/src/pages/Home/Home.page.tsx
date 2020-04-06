import * as React from "react";

import { Button } from "components";

function HomePage(): JSX.Element {
  return (
    <div>
      <p>Greetings from the homepage</p>
      <Button label="Press Me!" onClick={() => alert("Boo!")} />
    </div>
  );
}

export default HomePage as React.FC;
