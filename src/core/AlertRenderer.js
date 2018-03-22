import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { FadeAndSlideTransition as DefaultTransition } from "../transitions/FadeSlide";
import { containerStyle, positionStyle } from "../css/styles";
import { positions } from "./constants";

export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    console.log("rendering alert renderer", alerts, positions);
    return positions.map(position => (
      <TransitionGroup
        style={{ ...positionStyle.common, ...positionStyle[position] }}
        key={`__rta_pos_${position}`}
      >
        {alerts[position].map((alert, i) => {
          const Transition = alert.transition
            ? alert.transition
            : DefaultTransition;
          return (
            <Transition
              duration={alert.duration}
              key={`__rta_alert_${alert.id}`}
            >
              <Alert pos={i} remove={remove} {...alert} />
            </Transition>
          );
        })}
      </TransitionGroup>
    ));
  }
}
