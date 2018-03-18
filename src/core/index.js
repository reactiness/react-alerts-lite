import React from 'react';
import { Store } from './Store';
import { actions } from './actions';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { Alert } from './Alert';

const reducers = {
  alerts: reducer
}
let counter = 0;
const store = new Store(reducers, initialState);
// const unsubscribe = store.subscribe(state => {});
// function remove(id) {
// }

function insert(type, content, timeout) {
  store.dispatch(actions.add({
    "id": counter, 
    "content": content, 
    "type": type,
    "timeout": timeout
  }))
  counter++;
}

export class Alerts extends React.Component {

  constructor(props) {
    super(props);
  }

  static error(content, timeout) {
    insert('error', content, timeout)
  }
  static warning(content, timeout) {
    insert('warning', content, timeout)
  } 
  static success(content, timeout) {
    insert('success', content, timeout)
  } 
  static info(content, timeout) {
    insert('info', content, timeout)
  }
  static basic(content, timeout) {
    insert('basic', content, timeout)
  }

  static remove(id){
    store.dispatch(actions.remove(id))
  }

  render() {
    return(
      <div>
        {store.state.alerts.current.map((alert, i) => {

          return (
            <Alert key={alert.id} remove={Alerts.remove} {...alert}/>
          )
        })}
      </div>
    )
  };
};
