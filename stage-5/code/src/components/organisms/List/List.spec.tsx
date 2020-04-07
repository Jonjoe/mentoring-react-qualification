import React from "react";
import renderer from "react-test-renderer";

import List from "./List.component";

test("List renders as expected", () => {
  const component = renderer.create(
    <List data={["this", "is", "a", "list"]} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
