import React from "react";
import { AlertProvider } from "../core/AlertProvider.js";

describe("Alert Provider", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<AlertProvider />);
    expect(wrapper).toMatchSnapshot();
  });
  // it()
});
