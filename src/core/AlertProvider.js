import React, { Component } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";
import { AlertRenderer } from "./AlertRenderer";
import { Store } from "../state/Store";
import { actions } from "../state/actions";
import { positionsArray } from "./constants";

const reducers = {
  alerts: reducer
};

export const store = new Store(reducers, initialState);

const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(actions.remove(id));
  };
  const addDefaultProps = props => {
    dispatch(actions.addDefaultProps(props));
  };
  return {
    handleRemove,
    addDefaultProps
  };
};

const initEmptyPositionsObject = () => {
  const positionsObject = {};
  positionsArray.forEach(position => {
    positionsObject[position] = [];
  });
  return positionsObject;
};

export class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: initEmptyPositionsObject()
    };
    this.handlers = createHandlers(store.dispatch);
  }

  sortAlerts(alerts, container) {
    alerts.forEach(alert => {
      container[alert.position].push(alert);
    });
    this.setState({ alerts: container });
  }

  componentDidMount() {
    store.subscribe(store =>
      this.sortAlerts(store.alerts.current, initEmptyPositionsObject())
    );
    if (this.props.defaultProps)
      this.handlers.addDefaultProps(this.props.defaultProps);
  }

  render() {
    return (
      <AlertRenderer
        alerts={this.state.alerts}
        remove={this.handlers.handleRemove}
        transitions={this.props.transitions}
      />
    );
  }
}
