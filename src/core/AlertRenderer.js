import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle } from "../css/styles";
import { positions } from "./constants";

export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    return positions.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map(alert => (
          <alert.transition
            duration={alert.duration}
            key={`__rta_alert_${alert.id}`}
          >
            <Alert remove={remove} {...alert} />
          </alert.transition>
        ))}
      </TransitionGroup>
    ));
  }
}
