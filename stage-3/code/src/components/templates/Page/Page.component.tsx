import React from "react";

interface PageProps {
  children: React.ReactNode;
}

function Page(props: PageProps): JSX.Element {
  const { children } = props;

  return <main>{children}</main>;
}

export default Page as React.FC<PageProps>;
