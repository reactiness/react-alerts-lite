import React from 'react';
import {Store} from './Store';
import {actions} from './actions';
import {reducer} from './reducer';

const reducers = {
  alerts: reducer
}
const store = new Store(reducers);
const unsubscribe = store.subscribe(state => {});

class Alert extends React.Component {

  static error(msg, data) {
    console.log('here');
  }

  render() {
    store.dispatch(actions.add({"asd": 'asd'}))
    console.log(store.value());
    return(
      <p>render func</p>

    )
  };
};

export default Alert;