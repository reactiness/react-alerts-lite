import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";
import { containerStyle, positionStyle } from "../css/styles";

const positions = [
  "bottom",
  "top",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "bottom-full",
  "top-full"
];

export class AlertRenderer extends Component {
  render() {
    const { alerts, remove } = this.props;
    console.log("rendering alert renderer", alerts, positions);
    return positions.map(position => (
      <TransitionGroup style={positionStyle}>
        {alerts[position].map((alert, i) => {
          const Transition = alert.transition
            ? alert.transition
            : FadeAndSlideTransition;
          return (
            <Transition
              duration={alert.duration}
              key={`__rsa_alert_${alert.id}`}
            >
              <Alert pos={i} remove={remove} {...alert} />
            </Transition>
          );
        })};
      </TransitionGroup>
    ));
  }
}
