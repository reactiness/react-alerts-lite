import {initialState} from './initialState';

const remove = (state, id) => {
  return {
    ...state,
    current: state.current.filter((el) => el.id === id)
  }
}

const add = (state, alert) => {
  return {
    ...state,
    current: [
      ...state.current,
      alert
    ]
  }
}

export function reducer(state = initialState.alerts, action) {
  switch (action.type) {
    case 'REMOVE': {
      return remove(state, action.payload)
    }

    case 'ADD': {
      return add(state, action.payload)
    }

    default:
      return state
  }
}