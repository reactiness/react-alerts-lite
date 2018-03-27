import React, { Component } from "react";
// import { actions } from './actions';
import {
  defaultStyle,
  errorStyle,
  infoStyle,
  basicStyle,
  warningStyle,
  successStyle,
  containerStyle
} from "../css/styles";
import info from "../assets/info.svg";

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    };
    this.interval = null;
    // console.log(this.props.type);
    // console.log(this.getStyle);
    this.style = this.getStyle(this.props.type);
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

  getStyle(type) {
    // console.log('asdasdasd', type);
    switch (type) {
      case "error":
        return errorStyle;
      case "warning":
        return warningStyle;
      case "success":
        return successStyle;
      case "info":
        return infoStyle;
      case "basic":
        return basicStyle;
      default:
        return {};
    }
  }

  render() {
    const { content, type, remove, style, ...props } = this.props;
    // console.log(this.style);
    // console.log(type);

    return (
      <div style={{ ...containerStyle, ...style }} {...props}>
        <img src={info} />
        <div
          style={{
            ...defaultStyle,
            ...this.style
          }}
        >
          {content}
        </div>
      </div>
    );
  }
}
