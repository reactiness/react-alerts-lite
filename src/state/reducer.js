import { initialState } from "./initialState";

const remove = (state, id) => ({
  ...state,
  current: state.current.filter(el => el.id !== id)
});

const add = (state, alert) => ({
  ...state,
  current: [...state.current, alert]
});

const removeType = (state, type) => ({
  ...state,
  current: state.current.filter(el => el.type !== type)
});

const addDefaultProps = (state, props) => ({
  ...state,
  defaultProps: props
});

export function reducer(state = initialState.alerts, action) {
  console.log(action);
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
      return addDefaultProps(state, action.payload);
    }

    default:
      return state;
  }
}
