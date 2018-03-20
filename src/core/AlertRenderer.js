import { Alert } from "./Alert";
import React, { Component } from "react";
import { actions } from "../state/actions";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";
import { containerStyle } from "../css/styles";

const createHandlers = dispatch => {
  const handleRemove = id => {
    dispatch(actions.remove(id));
  };
  return {
    handleRemove
  };
};

export class AlertRenderer extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.store.dispatch);
  }

  render() {
    console.log("rendering alert renderer");
    const { store } = this.props;
    return (
      <TransitionGroup>
        {store.state.alerts.current.map((alert, i) => {
          if (alert.transition) {
            return (
              <alert.transition
                duration={alert.duration}
                key={`__rsa_alert_${alert.id}`}
              >
                <Alert pos={i} remove={this.handlers.handleRemove} {...alert} />
              </alert.transition>
            );
          } else {
            return (
              <FadeAndSlideTransition
                duration={1000}
                key={`__rsa_alert_${alert.id}`}
              >
                <Alert pos={i} remove={this.handlers.handleRemove} {...alert} />
              </FadeAndSlideTransition>
            );
          }
        })}
      </TransitionGroup>
    );
  }
}
