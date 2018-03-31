import React from "react";
import { AlertRenderer } from "../core/AlertRenderer";
import {
  transitionConstants,
  positionConstants,
  themeConstants
} from "../core/constants";
import { initialState } from "../state/initialState";
import { transitions } from "../transitions";
import { themeStyles } from "../css/styles";

const alert = {
  id: 0,
  closeButton: true,
  content: "this is a test alert",
  duration: 500,
  maxHeight: "200px",
  position: "top-right",
  timeout: 3000,
  transition: "fade",
  type: "basic"
};

const sortedAlerts = {
  bottom: [
    { ...alert, id: 8, type: "basic", position: positionConstants.bottom }
  ],
  top: [
    { ...alert, id: 7, type: "basic", position: positionConstants.top },
    { ...alert, id: 9, type: "basic", position: positionConstants.top }
  ],
  "top-left": [
    { ...alert, id: 1, type: "basic", position: positionConstants.topLeft }
  ],
  "top-right": [
    alert,
    { ...alert, id: 2, type: "basic", position: positionConstants.topRight }
  ],
  "bottom-left": [
    { ...alert, id: 3, type: "basic", position: positionConstants.bottomLeft }
  ],
  "bottom-right": [
    { ...alert, id: 4, type: "basic", position: positionConstants.bottomRight }
  ],
  "bottom-full": [
    { ...alert, id: 6, type: "basic", position: positionConstants.bottomFull }
  ],
  "top-full": [
    { ...alert, id: 5, type: "basic", position: positionConstants.topFull }
  ]
};

describe("Alert Renderer", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<AlertRenderer alerts={sortedAlerts} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should select the correct transition", () => {
    const wrapper = mount(<AlertRenderer alerts={sortedAlerts} />);
    const selectTransition = wrapper.instance().selectTransition;

    let transition = selectTransition(transitionConstants.slideDown);
    expect(transition).toEqual(transitions[transitionConstants.slideDown]);
    transition = selectTransition(transitionConstants.slideUp);
    expect(transition).toEqual(transitions[transitionConstants.slideUp]);
    transition = selectTransition(transitionConstants.slideUpThrough);
    expect(transition).toEqual(transitions[transitionConstants.slideUpThrough]);
    transition = selectTransition(transitionConstants.fade);
    expect(transition).toEqual(transitions[transitionConstants.fade]);
    transition = selectTransition(transitionConstants.slideRight);
    expect(transition).toEqual(transitions[transitionConstants.slideRight]);
    transition = selectTransition(transitionConstants.slideLeft);
    expect(transition).toEqual(transitions[transitionConstants.slideLeft]);
    transition = selectTransition(transitionConstants.rotateLeft);
    expect(transition).toEqual(transitions[transitionConstants.rotateLeft]);
    transition = selectTransition(transitionConstants.rotateRight);
    expect(transition).toEqual(transitions[transitionConstants.rotateRight]);
    transition = selectTransition(transitionConstants.scale);
    expect(transition).toEqual(transitions[transitionConstants.scale]);
    transition = selectTransition(transitionConstants.scaleSlideDown);
    expect(transition).toEqual(transitions[transitionConstants.scaleSlideDown]);
    transition = selectTransition(transitionConstants.scaleSlideLeft);
    expect(transition).toEqual(transitions[transitionConstants.scaleSlideLeft]);
    transition = selectTransition(transitionConstants.scaleSlideRight);
    expect(transition).toEqual(
      transitions[transitionConstants.scaleSlideRight]
    );
    transition = selectTransition(transitionConstants.scaleSlideUp);
    expect(transition).toEqual(transitions[transitionConstants.scaleSlideUp]);
    transition = selectTransition(transitionConstants.none);
    expect(transition).toEqual(transitions[transitionConstants.none]);
  });
  it("should fallback to fade transition on error or invalid keyname", () => {
    const wrapper = mount(<AlertRenderer alerts={sortedAlerts} />);
    const selectTransition = wrapper.instance().selectTransition;
    const transition = selectTransition("invalid transition key");
    expect(transition).toEqual(transitions[transitionConstants.fade]);
  });
  it("should select the correct theme", () => {
    const wrapper = mount(
      <AlertRenderer alerts={sortedAlerts} theme={themeConstants.rounded} />
    );
    const selectTheme = wrapper.instance().selectTheme;
    let theme = selectTheme(themeConstants.rounded);
    expect(theme).toEqual(themeStyles[themeConstants.rounded]);
    theme = selectTheme(themeConstants.flatRounded);
    expect(theme).toEqual(themeStyles[themeConstants.flatRounded]);
    theme = selectTheme(themeConstants.shadowed);
    expect(theme).toEqual(themeStyles[themeConstants.shadowed]);
    theme = selectTheme(themeConstants.flat);
    expect(theme).toEqual(themeStyles[themeConstants.flat]);
    theme = selectTheme(themeConstants.bordered);
    expect(theme).toEqual(themeStyles[themeConstants.bordered]);
  });
  it("should return empty theme on error or invalid keyname", () => {
    const wrapper = mount(<AlertRenderer alerts={sortedAlerts} />);
    const selectTheme = wrapper.instance().selectTheme;
    let theme = selectTheme("invalid theme key");
    expect(theme).toEqual({});
  });
  it("should call selectTheme when providing theme", () => {
    const spy = jest.spyOn(AlertRenderer.prototype, "selectTheme");
    const wrapper = mount(
      <AlertRenderer alerts={sortedAlerts} theme={themeConstants.rounded} />
    );
    expect(spy).toHaveBeenCalledTimes(10);
  });
  it("should call selectTransition when providing alerts", () => {
    const spy = jest.spyOn(AlertRenderer.prototype, "selectTransition");
    const wrapper = mount(<AlertRenderer alerts={sortedAlerts} />);
    expect(spy).toHaveBeenCalledTimes(10);
  });
  it("should apply a custom theme when provided as a prop", () => {
    const customTheme = { border: "1px solid red" };
    const wrapper = mount(
      <AlertRenderer alerts={sortedAlerts} customTheme={customTheme} />
    );
    const selectTheme = wrapper.instance().selectTheme;
    let theme = selectTheme();
    expect(theme).toEqual(customTheme);
  });
  it("should merge a custom theme with selected theme with customTheme taking precedence", () => {
    const customTheme = { border: "1px solid red" };
    const wrapper = mount(
      <AlertRenderer alerts={sortedAlerts} customTheme={customTheme} />
    );
    const selectTheme = wrapper.instance().selectTheme;
    let theme = selectTheme(themeConstants.bordered);
    expect(theme).toEqual({
      ...themeStyles[themeConstants.bordered],
      ...customTheme
    });
  });
  it("should select custom transition when provided via props", () => {
    const customTransitions = [
      {
        name: "custom-transition",
        transition: transitions[transitionConstants.scaleSlideRight]
      },
      {
        name: "custom-transition-two",
        transition: transitions[transitionConstants.scaleSlideUp]
      }
    ];
    const wrapper = mount(<AlertRenderer alerts={sortedAlerts} transitions={customTransitions} />);
    const selectTransition = wrapper.instance().selectTransition;
    const transition = selectTransition("custom-transition-two");
    expect(transition).toEqual(transitions[transitionConstants.scaleSlideUp]);
  });
});
