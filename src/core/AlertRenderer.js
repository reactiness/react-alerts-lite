import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle } from "../css/styles";
import { positionsArray, positionSections } from "./constants";
import { transitions as stockTransitions } from "../transitions";

export class AlertRenderer extends Component {
  constructor(props) {
    super(props);
    this.selectTransition = this.selectTransition.bind(this);
  }

  selectTransition(transitionString) {
    const { transitions: customTransitions } = this.props;
    try {
      if (customTransitions && customTransitions[transitionString])
        return customTransitions[transitionString];
      if (stockTransitions[transitionString])
        return stockTransitions[transitionString];
      console.warn("Transition name not found: defaulting to fade transition");
      return stockTransitions["fade"];
    } catch (error) {
      console.warn("Transition name not found: defaulting to fade transition");
      return stockTransitions["fade"];
    }
  }

  render() {
    const { alerts, remove } = this.props;
    return positionsArray.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map(alert => {
          const Transition = this.selectTransition(alert.transition);
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
