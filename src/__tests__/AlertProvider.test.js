import React from "react";
import { AlertProvider } from "../core/AlertProvider.js";
import { positionConstants } from "../core/constants";

const alert = {
  id: 0,
  closeButton: true,
  content: "this is a test alert",
  duration: 500,
  maxHeight: "200px",
  position: "top-right",
  timeout: 3000,
  transition: "scale-slide-right",
  type: "basic"
};

const populate = () => {
  return [
    alert,
    { ...alert, id: 1, type: "basic", position: positionConstants.topLeft },
    { ...alert, id: 2, type: "basic", position: positionConstants.topRight },
    { ...alert, id: 3, type: "basic", position: positionConstants.bottomLeft },
    { ...alert, id: 4, type: "basic", position: positionConstants.bottomRight },
    { ...alert, id: 5, type: "basic", position: positionConstants.topFull },
    { ...alert, id: 6, type: "basic", position: positionConstants.bottomFull },
    { ...alert, id: 7, type: "basic", position: positionConstants.top },
    { ...alert, id: 8, type: "basic", position: positionConstants.bottom },
    { ...alert, id: 9, type: "basic", position: positionConstants.top }
  ];
};

const manuallySorted = {
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

describe("Alert Provider", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<AlertProvider />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should sort alerts correctly", () => {
    const wrapper = mount(<AlertProvider />);
    const alerts = populate();
    const positions = wrapper.instance().initEmptyPositionsObject();
    const sorted = wrapper.instance().sortAlerts(alerts, positions);
    expect(wrapper.state("alerts")).toEqual(manuallySorted);
  });
  // it("should add default props if they are passed in as a prop", () => {
  //   const defaultProps = {
  //     transition: "fade",
  //     duration: 500
  //   };
  //   const wrapper = mount(<AlertProvider defaultProps={defaultProps} />);
  //   console.log('proto', wrapper.instance().handlers);
  //   const mock = jest.spyOn(wrapper.instance(), "handleAddDefaultProps");
  //   // console.log('INSTNCE', wrapper.instance());
  //   expect(mock).toHaveBeenCalledTimes(1);
  // });
});
