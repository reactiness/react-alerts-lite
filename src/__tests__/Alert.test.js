import React from "react";
import { Alert } from "../core/Alert.js";

describe("Alert", () => {
  it("should be defined", () => {
    expect(Alert).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = shallow(
      <Alert
        content="this is a test alert"
        type="success"
        remove={jest.fn()}
        closeButton={true}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div.__rta_container")).toHaveLength(1);
    expect(wrapper.find("div.__rta_icon")).toHaveLength(1);
    expect(wrapper.find("div.__rta_content")).toHaveLength(1);
    expect(wrapper.find("div.__rta_close")).toHaveLength(1);
  });
  it("should render without close icon when closeButton prop equals false", () => {
    const wrapper = shallow(
      <Alert
        content="this is a test alert"
        type="success"
        remove={jest.fn()}
        closeButton={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div.__rta_close")).toHaveLength(0);
  });
  it("should render success alert correctly", () => {
    const wrapper = shallow(
      <Alert content="test" type="success" remove={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render warning alert correctly", () => {
    const wrapper = shallow(
      <Alert content="test" type="warning" remove={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render error alert correctly", () => {
    const wrapper = shallow(
      <Alert content="test" type="error" remove={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render basic alert correctly", () => {
    const wrapper = shallow(
      <Alert content="test" type="basic" remove={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render info alert correctly", () => {
    const wrapper = shallow(
      <Alert content="test" type="info" remove={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should call remove on clicking close button", () => {
    const remove = jest.fn();
    const wrapper = mount(<Alert content="test" type="info" remove={remove} closeButton={true} />);
    wrapper.find("div.__rta_close").simulate("click");
    expect(remove).toHaveBeenCalled();
  });
});

// closeButton: true,
// content: "this is a test alert",
// type: "basic",
