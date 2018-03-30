import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle } from "../css/styles";
import { positionsArray, positionSections } from "./constants";
import { transitions } from "../transitions";

// need to determine transition here using string. Dont pass in transition object to state through alert -> add
export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    return positionsArray.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map(alert => {
          const Transition = transitions[alert.transition];
          return (
            <Transition
              duration={alert.duration}
              key={`__rta_alert_${alert.id}`}
              maxHeight={alert.maxHeight}
            >
              <Alert remove={remove} {...alert} />
            </Transition>
          );
        })}
      </TransitionGroup>
    ));
  }
}
