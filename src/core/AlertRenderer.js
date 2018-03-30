import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle } from "../css/styles";
import { positions, positionSections } from "./constants";
import { stockTransitionsConstants as sTC } from "../core/constants";
import { FadeSlideUp } from "../transitions/FadeSlideUp";
import { FadeSlideDown } from "../transitions/FadeSlideDown";

const stockTransitionMapping = {
  [sTC.fadeSlideDown]: FadeSlideDown,
  [sTC.fadeSlideUp]: FadeSlideUp
};

// need to determine transition here using string. Dont pass in transition object to state through alert -> add
export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    return positions.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map(alert => {
          const Transition = stockTransitionMapping[alert.transition];
          return (
            <Transition
              duration={alert.duration}
              key={`__rta_alert_${alert.id}`}
            >
              <Alert remove={remove} {...alert} />
            </Transition>
          )
        })}
      </TransitionGroup>
    ));
  }
}
