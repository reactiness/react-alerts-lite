import React, { Component } from "react";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initialState";
import { AlertRenderer } from "./AlertRenderer";
import { Store } from "./state/Store";
import { remove, addDefaultProps } from "./state/actionCreators";
import { positionsArray } from "./constants";

const reducers = {
  alerts: reducer
};

export const store = new Store(reducers, initialState);

const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(remove(id));
  };
  const handleAddDefaultProps = props => {
    dispatch(addDefaultProps(props));
  };
  return {
    handleRemove,
    handleAddDefaultProps
  };
};

export class AlertProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: this.initEmptyPositionsObject()
    };
    this.handlers = createHandlers(store.dispatch);
  }

  initEmptyPositionsObject() {
    const positionsObject = {};
    positionsArray.forEach(position => {
      positionsObject[position] = [];
    });
    return positionsObject;
  }

  sortAlerts(alerts, container) {
    alerts.forEach(alert => {
      container[alert.position].push(alert);
    });
    this.setState({ alerts: container });
  }

  componentDidMount() {
    const { defaultProps, customTheme } = this.props;
    store.subscribe(store =>
      this.sortAlerts(store.alerts.current, this.initEmptyPositionsObject())
    );
    if (defaultProps) this.handlers.handleAddDefaultProps(defaultProps);
  }

  render() {
    return (
      <AlertRenderer
        alerts={this.state.alerts}
        remove={this.handlers.handleRemove}
        transitions={this.props.transitions}
        theme={this.props.theme}
        customTheme={this.props.customTheme ? this.props.customTheme : {}}
      />
    );
  }
}
