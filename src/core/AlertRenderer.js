import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";
import { containerStyle, positionStyle } from "../css/styles";

export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    console.log("rendering alert renderer", alerts);
    return (
      <TransitionGroup style={positionStyle}>
        {alerts.map((alert, i) => {
          if (alert.transition) {
            return (
              <alert.transition
                duration={alert.duration}
                key={`__rsa_alert_${alert.id}`}
              >
                <Alert pos={i} remove={remove} {...alert} />
              </alert.transition>
            );
          } else {
            return (
              <FadeAndSlideTransition
                duration={1000}
                key={`__rsa_alert_${alert.id}`}
              >
                <Alert pos={i} remove={remove} {...alert} />
              </FadeAndSlideTransition>
            );
          }
        })}
      </TransitionGroup>
    );
  }
}
