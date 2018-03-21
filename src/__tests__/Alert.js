import React from "react";
import { shallow } from "enzyme";
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
        pos={0}
        remove={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
