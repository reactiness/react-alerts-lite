import React from "react";
import { Alert } from "../core/Alert.js";

describe("Alert", () => {
  it("should be defined", () => {
    expect(Alert).toBeDefined();
  });

  it("should render correctly", () => {
    const tree = shallow(
      <Alert
        content="this is a test alert"
        type="success"
        pos={"bottom"}
        remove={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
