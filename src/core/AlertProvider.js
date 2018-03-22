import React, { Component } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";
import { AlertRenderer } from "./AlertRenderer";
import { Store } from "../state/Store";
import { actions } from "../state/actions";
import { positions } from "./constants";

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

const initPositionsObject = () => {
  const positionsObject = {};
  positions.forEach(position => {
    positionsObject[position] = [];
  });
  return positionsObject;
};

export class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: initPositionsObject()
    };
    this.handlers = createHandlers(store.dispatch);
  }

  sortAlerts(alerts) {
    const sortedAlerts = initPositionsObject();
    alerts.forEach(alert => {
      sortedAlerts[alert.position].push(alert);
    });
    this.setState({ alerts: sortedAlerts });
  }

  componentDidMount() {
    store.subscribe(store => this.sortAlerts(store.alerts.current)); // TODO: bad practice to use forceUpdate()? not sure how to solve otherwise. research this.
  }

  render() {
    return (
      <AlertRenderer
        alerts={this.state.alerts}
        remove={this.handlers.handleRemove}
      />
    );
  }
}
