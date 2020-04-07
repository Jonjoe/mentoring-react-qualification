import React from "react";
import * as Styled from "./List.styles";

import { Repo } from "../../../modules/api/github";

interface ListProps {
  data: Repo[];
}

function List(props: ListProps): JSX.Element {
  const { data } = props;
  return (
    <Styled.Container>
      {data.map((repo: Repo, index: number) => (
        <li key={index}>
          <a href={repo.html_url || ""}>{repo.name}</a>
        </li>
      ))}
    </Styled.Container>
  );
}
export default List as React.FC<ListProps>;
