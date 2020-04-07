import React from "react";

interface LoaderProps {}

function Loader(props: LoaderProps): JSX.Element {
  return (
    <div>
      <p>Loading ...</p>
    </div>
  );
}

export default Loader as React.FC<LoaderProps>;
