import React from "react";
// import { shallow } from "enzyme";
import { Alert } from "../core/Alert.js";
import toJson from "enzyme-to-json";

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
    expect(toJson(tree)).toMatchSnapshot();
  });
});
