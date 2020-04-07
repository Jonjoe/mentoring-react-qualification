import React from "react";

interface ListProps {
  data: any[];
}

function List(props: ListProps): JSX.Element {
  const { data } = props;
  return (
    <ul>
      {data
        .map((repo: any) => (
          <li>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
    </ul>
  );
}
export default List as React.FC<ListProps>;
