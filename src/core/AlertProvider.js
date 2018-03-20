import React, { Component } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";
import { AlertRenderer } from "./AlertRenderer";
import { Store } from "../state/Store";

const reducers = {
  alerts: reducer
};

export const store = new Store(reducers, initialState);

export class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    };
  }
  componentDidMount() {
    store.subscribe(alerts => this.setState({ alerts: alerts })); // TODO: bad practice to use forceUpdate()? not sure how to solve otherwise. research this.
  }

  render() {
    return <AlertRenderer store={store} />;
  }
}
