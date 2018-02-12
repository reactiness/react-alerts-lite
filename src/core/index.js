import React from 'react';
import {Store} from './Store';
import {actions} from './actions';
import {reducer} from './reducer';
import {initialState} from './initialState';

const reducers = {
  alerts: reducer
}
const store = new Store(reducers, initialState);
// const unsubscribe = store.subscribe(state => {});

class Alert extends React.Component {

  static error(msg, data) {
    console.log('here');
  }

  render() {
    store.dispatch(actions.add({"asd": 'asd'}))
    console.log("STORE VALUE", store.value());
    console.log("STORE", store);
    return(
      // loop over the state and render each state entry into a component
      <p>render func</p>
       
    )
  };
};

export default Alert;