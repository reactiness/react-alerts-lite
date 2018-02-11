import {initialState} from './initialState';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      const newAlert = action.payload;
      const updatedAlerts = [...state.current, newAlert];
      return {
        ...state,
        updatedAlerts
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