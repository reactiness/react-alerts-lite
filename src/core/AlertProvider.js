import React, { Component } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { AlertRenderer } from './AlertRenderer';
import { Store } from './Store';

const reducers = {
  alerts: reducer
}

export const store = new Store(reducers, initialState);

export class AlertProvider  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: []
    }
  }
  componentDidMount() {
    store.subscribe((alerts) => this.setState({alerts: alerts})); // TODO: bad practice to use forceUpdate()? not sure how to solve otherwise. research this.
  }

  render() {
    return (
      <AlertRenderer store={store}/>
    );
  }
}