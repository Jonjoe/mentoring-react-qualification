import React from "react";
import * as Styled from "./Page.styles";

interface PageProps {
  children: React.ReactNode;
}

function Page(props: PageProps): JSX.Element {
  const { children } = props;

  return <Styled.Container>{children}</Styled.Container>;
}

export default Page as React.FC<PageProps>;
