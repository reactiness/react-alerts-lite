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
      alerts: {
        ["bottom"]: [],
        ["top"]: [],
        ["top-left"]: [],
        ["top-right"]: [],
        ["bottom-left"]: [],
        ["bottom-right"]: [],
        ["bottom-full"]: [],
        ["top-full"]: []
      }
    };
    this.handlers = createHandlers(store.dispatch);
  }

  sortAlerts(alerts) {
    const sortedAlerts = {
      ["bottom"]: [],
      ["top"]: [],
      ["top-left"]: [],
      ["top-right"]: [],
      ["bottom-left"]: [],
      ["bottom-right"]: [],
      ["bottom-full"]: [],
      ["top-full"]: []
    };
    alerts.forEach(alert => {
      console.log("ALERT", alert);
      sortedAlerts[alert.position].push(alert);
    });
    this.setState({ alerts: sortedAlerts });
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
