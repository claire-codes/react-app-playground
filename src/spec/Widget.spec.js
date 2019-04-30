import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Widget from "../Widget";

test("it works", () => {
  const tree = renderer.create(<Widget />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});
