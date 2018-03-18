import { Alert } from "./Alert";
import React, { Component } from 'react';
import { actions } from './actions';


const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(actions.remove(id));
  }
  return {
    handleRemove
  }
}

export class AlertRenderer extends Component {

  constructor (props) {
    super(props);
    this.handlers = createHandlers(this.props.store.dispatch);
  }
  
  render() {
    console.log('rendering alert renderer');
    const { store } = this.props;
    return(
        store.state.alerts.current.map((alert, i) => {
          return (
            <Alert key={alert.id} pos={i} store={store} remove={this.handlers.handleRemove} {...alert}/>
          )
        })
    )
  };
}