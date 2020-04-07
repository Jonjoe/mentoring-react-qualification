import React from "react";
import * as Styled from "./List.styles";

interface ListProps {
  data: any[];
}

function List(props: ListProps): JSX.Element {
  const { data } = props;
  return (
    <Styled.Container>
      {data.map((repo: any, index: number) => (
        <li key={index}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </Styled.Container>
  );
}
export default List as React.FC<ListProps>;
