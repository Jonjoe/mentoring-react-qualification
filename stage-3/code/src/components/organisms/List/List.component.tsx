import React from "react";

interface ListProps {}

function List(props: ListProps): JSX.Element {
  return (
    <div>
      <p>List</p>
    </div>
  );
}

export default List as React.FC<ListProps>;
