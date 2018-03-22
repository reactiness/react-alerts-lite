import React, { Component } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";
import { AlertRenderer } from "./AlertRenderer";
import { Store } from "../state/Store";
import { actions } from "../state/actions";

const reducers = {
  alerts: reducer
};

export const store = new Store(reducers, initialState);

const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(actions.remove(id));
  };
  return {
    handleRemove
  };
};

export class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    };
    this.handlers = createHandlers(store.dispatch);
  }

  sortAlerts(alerts) {
    this.setState({ alerts: alerts });
  }

  componentDidMount() {
    store.subscribe(store => this.sortAlerts(store.alerts.current)); // TODO: bad practice to use forceUpdate()? not sure how to solve otherwise. research this.
  }

  render() {
    console.log("renderer", this.state, this.props);
    return (
      <AlertRenderer
        alerts={this.state.alerts}
        remove={this.handlers.handleRemove}
      />
    );
  }
}
