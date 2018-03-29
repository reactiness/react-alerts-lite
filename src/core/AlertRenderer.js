import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle } from "../css/styles";
import { positions, positionSections } from "./constants";
import { defaultAlertArgs, stockTransitionsConstants as sTC } from "../core/constants";
import { FadeSlideBottom } from "../transitions/FadeSlideBottom";
import { FadeSlideTop } from "../transitions/FadeSlideTop";



// need to determine transition here using string. Dont pass in transition object to state through alert -> add
export class AlertRenderer extends Component {
  this.stockTransitions() {
    [sTC.fadeSlideTop]: FadeSlideTop,
    [sTC.fadeSlideBottom]: FadeSlideBottom
  };
  render() {
    const { alerts, remove } = this.props;
    return positions.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map(alert => {
          const Transition = stockTransitions
          return (
            <alert.transition
              duration={alert.duration}
              key={`__rta_alert_${alert.id}`}
            >
              <Alert remove={remove} {...alert} />
            </alert.transition>
          )
        })}
      </TransitionGroup>
    ));
  }
}
