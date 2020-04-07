import React from "react";
import renderer from "react-test-renderer";

import { Repo } from "../../../modules/api/github";

import List from "./List.component";

test("List renders as expected", () => {
  const data = [
    { name: "this" },
    { name: "is" },
    { name: "a" },
    { name: "list" }
  ] as Repo[];

  const component = renderer.create(<List data={data} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
