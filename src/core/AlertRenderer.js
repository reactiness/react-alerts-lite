import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { alertIcons } from "../css/styles";
import {
  positionsArray,
  alertConstants,
  themeConstants,
  CLASS_PREFIX
} from "./constants";
import { transitions as stockTransitions } from "../transitions";

export class AlertRenderer extends Component {
  constructor(props) {
    super(props);
    this.selectTransition = this.selectTransition.bind(this);
    this.selectTheme = this.selectTheme.bind(this);
  }

  selectTransition(transitionString) {
    const { transitions: customTransitions } = this.props;
    try {
      if (customTransitions) {
        const customTransition = customTransitions.find(
          t => t.name === transitionString
        );
        if (customTransition) return customTransition.transition;
      }
      if (stockTransitions[transitionString])
        return stockTransitions[transitionString];
      console.warn("Transition name not found: defaulting to fade transition");
      return stockTransitions["fade"];
    } catch (error) {
      console.warn("Transition name not found: defaulting to fade transition");
      return stockTransitions["fade"];
    }
  }

  // TODO
  // selectType(typeString) {

  // }

  // TODO
  // selectIcon(iconString) {

  // }

  selectTheme(themeString) {
    try {
      if (themeString) {
        const temp = themeConstants;
        const themeExists = themeConstants[themeString];
        console.log(themeString, themeExists);
        if (themeExists) return `${CLASS_PREFIX}theme_${themeString}`;
        console.warn("Theme not found");
      }
      return "";
    } catch (error) {
      console.warn("Theme not found");
      return "";
    }
  }

  render() {
    const { alerts, remove, theme } = this.props;
    return positionsArray.map(position => (
      <TransitionGroup
        className={`${CLASS_PREFIX}pos_common ${CLASS_PREFIX}pos_${position}`}
        key={`${CLASS_PREFIX}key_pos_${position}`}
      >
        {alerts[position].map(alert => {
          const Transition = this.selectTransition(alert.transition);
          return (
            <Transition
              duration={alert.duration}
              key={`${CLASS_PREFIX}key_alert_${alert.id}`}
              maxHeight={alert.maxHeight}
            >
              <Alert
                {...alert}
                theme={this.selectTheme(theme)}
                remove={remove}
                type={`${CLASS_PREFIX}type_${alertConstants[alert.type]}`}
                icon={alert.icon ? icon : alertIcons[alert.type]}
              />
            </Transition>
          );
        })}
      </TransitionGroup>
    ));
  }
}
