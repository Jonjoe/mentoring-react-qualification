import React from "react";
import renderer from "react-test-renderer";

import Loader from "./Loader.component";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Loader />
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});
