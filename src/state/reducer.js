import { initialState } from "./initialState";

const remove = (state, id) => {
  return {
    ...state,
    current: state.current.filter(el => el.id !== id)
  };
};

const add = (state, alert) => {
  return {
    ...state,
    current: [...state.current, alert]
  };
};

const removeType = (state, type) => {
  return {
    ...state,
    current: state.current.filter(el => el.type !== type)
  };
};

export function reducer(state = initialState.alerts, action) {
  switch (action.type) {
    case "REMOVE": {
      return remove(state, action.payload);
    }

    case "ADD": {
      return add(state, action.payload);
    }

    case "REMOVE_TYPE": {
      return removeType(state, action.payload);
    }

    case "REMOVE_ALL": {
      return initialState.alerts;
    }

    case "ADD_DEFAULT_PROPS": {
      return {
        ...state,
        defaultProps: action.payload
      };
    }

    default:
      return state;
  }
}
