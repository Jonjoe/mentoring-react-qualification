import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input.component";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Input onChange={() => null} value="Example Value" />
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});
