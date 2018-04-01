import { reducer } from "../core/state/reducer";
import { initialState } from "../core/state/initialState";
import {
  ADD,
  REMOVE,
  REMOVE_TYPE,
  REMOVE_ALL,
  ADD_DEFAULT_PROPS
} from "../core/state/actions";

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

const populate = state => {
  return {
    ...initialState.alerts,
    current: [
      alert,
      { ...alert, id: 1, type: "success" },
      { ...alert, id: 2, type: "warning" },
      { ...alert, id: 3, type: "error" },
      { ...alert, id: 4, type: "error" }
    ]
  };
};

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState.alerts);
  });
  it("should handle ADD", () => {
    const action = {
      payload: alert,
      type: ADD
    };
    const expected = {
      ...initialState.alerts,
      current: [...initialState.alerts.current, alert]
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });
  it("should handle REMOVE", () => {
    const state = populate(initialState);
    const action = {
      payload: 1,
      type: REMOVE
    };
    const expected = {
      ...state,
      current: state.current.filter(el => el.id !== action.payload)
    };

    expect(reducer(state, action)).toEqual(expected);
  });
  it("should handle REMOVE_ALL", () => {
    const state = populate(initialState);
    const action = {
      type: REMOVE_ALL
    };
    const expected = initialState.alerts;
    expect(reducer(state, action)).toEqual(expected);
  });
  it("should handle REMOVE_TYPE", () => {
    const state = populate(initialState);
    const action = {
      payload: "error",
      type: REMOVE_TYPE
    };
    const expected = {
      ...state,
      current: state.current.filter(el => el.type !== action.payload)
    };

    expect(reducer(state, action)).toEqual(expected);
  });
  it("should handle ADD_DEFAULT_PROPS", () => {
    const defaultProps = {
      duration: 1000,
      type: "success"
    };
    const action = {
      payload: defaultProps,
      type: ADD_DEFAULT_PROPS
    };
    const expected = {
      ...initialState.alerts,
      defaultProps
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });
});
