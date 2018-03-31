import { Alert } from "./Alert";
import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { containerStyle, positionStyle, themeStyles } from "../css/styles";
import { positionsArray, positionSections } from "./constants";
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

  selectTheme(themeString) {
    const { customTheme } = this.props;
    try {
      if (themeString) {
        const themeStyle = themeStyles[themeString];
        if (themeStyle) return { ...themeStyle, ...customTheme };
        console.warn("Theme not found");
      }
      return { ...customTheme };
    } catch (error) {
      console.warn("Theme not found");
      return { ...customTheme };
    }
  }

  render() {
    const { alerts, remove, theme } = this.props;
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
              maxHeight={alert.maxHeight} // Little bit hacky - maybe better way than this
            >
              <Alert
                theme={this.selectTheme(theme)}
                remove={remove}
                {...alert}
              />
            </Transition>
          );
        })}
      </TransitionGroup>
    ));
  }
}
