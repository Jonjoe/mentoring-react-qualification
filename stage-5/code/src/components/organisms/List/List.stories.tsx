import React from "react";

import { storiesOf } from "@storybook/react";

import { Repo } from "../../../modules/api/github";
import List from "./List.component";

const data = [
  { name: "this" },
  { name: "is" },
  { name: "a" },
  { name: "list" }
] as Repo[];

storiesOf("List", module).add("default", () => (
  <List data={data} />
));
