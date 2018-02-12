import {initialState} from './initialState';

export function reducer(state = initialState.alerts, action) {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        current: [
          ...state.current,
          action.payload
        ]
      };
    }
    case 'REMOVE': {
      return {
        state
      };
    }
  }

  return state;
}