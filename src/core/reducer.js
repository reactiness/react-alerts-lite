import {initialState} from './initialState';

export function reducer(state = initialState.alerts, action) {
  console.log('reducerstate -- outer', state, action);

  
  switch (action.type) {

    case 'REMOVE': {
      console.log('reducerstate -- inner remove', state, action);
      const current = state.current.filter((el) => el.id === action.payload)
      console.log('current', current);
      const state = {
        ...state,
        current
      }
      console.log('filtered: ', state);
      return state;
    }

    case 'ADD': {
      console.log('reducerstate -- inner add', state);
      return {
        ...state,
        current: [
          ...state.current,
          action.payload
        ]
      };
    }

   

    default:
      return state
    
  }

  return state;
}