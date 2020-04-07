import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input.component";

test("Input renders as expected", () => {
  const component = renderer.create(
    <Input onChange={() => null} value="Example Value" />
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});
