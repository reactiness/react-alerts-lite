import React, { Component } from "react";
// import { actions } from './actions';
import {
  defaultStyle,
  containerStyle,
  alertStyles,
  iconStyle,
  closeButtonStyle,
  contentStyle
} from "../css/styles";
import info from "../assets/info.svg";
import close from "../assets/x.svg";

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setTimeout(
      () => this.props.remove(this.props.id),
      this.props.timeout
    );
  }

  componentWillUnmount() {
    const { onClose } = this.props;
    if (onClose) onClose();
    clearInterval(this.interval);
  }

  render() {
    const {
      content,
      type,
      remove,
      style: transitionStyle,
      icon,
      ...props
    } = this.props;
    return (
      <div style={{ ...containerStyle, ...transitionStyle }} {...props}>
        <div
          style={{
            ...defaultStyle,
            ...alertStyles[type]
          }}
        >
          <div style={iconStyle}>
            <img src={info} style={{ margin: "0 auto" }} />
          </div>
          <div style={contentStyle}>{content}</div>
          <div style={closeButtonStyle}>
            <img src={close} style={{ margin: "0 auto" }} />
          </div>
        </div>
      </div>
    );
  }
}
