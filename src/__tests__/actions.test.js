import {
  ADD,
  REMOVE,
  REMOVE_TYPE,
  REMOVE_ALL,
  ADD_DEFAULT_PROPS
} from "../core/state/actions";
import {
  add,
  remove,
  removeAll,
  removeType,
  addDefaultProps
} from "../core/state/actionCreators";

const alert = {
  id: 0,
  closeButton: true,
  content: "this is a test alert",
  type: "basic",
  duration: 500,
  maxHeight: "200px",
  position: "top-right",
  timeout: 3000,
  transition: "scale-slide-right"
};

const defaultProps = {
  duration: 1000,
  type: "success"
};

describe("Actions", () => {
  it("create an action to add an alert", () => {
    const expectedAction = {
      payload: alert,
      type: ADD
    };
    expect(add(alert)).toEqual(expectedAction);
  });
  it("create an action to remove an alert", () => {
    const expectedAction = {
      payload: 0,
      type: REMOVE
    };
    expect(remove(0)).toEqual(expectedAction);
  });
  it("create an action to remove all alerts", () => {
    const expectedAction = {
      type: REMOVE_ALL
    };
    expect(removeAll()).toEqual(expectedAction);
  });
  it("create an action to remove all alerts of a type", () => {
    const expectedAction = {
      payload: "basic",
      type: REMOVE_TYPE
    };
    expect(removeType("basic")).toEqual(expectedAction);
  });
  it("create an action to add default props", () => {
    const expectedAction = {
      payload: defaultProps,
      type: ADD_DEFAULT_PROPS
    };
    expect(addDefaultProps(defaultProps)).toEqual(expectedAction);
  });
});
