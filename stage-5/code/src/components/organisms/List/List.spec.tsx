import React from "react";
import renderer from "react-test-renderer";

import List from "./List.component";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <List data={["this", "is", "a", "list"]} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
