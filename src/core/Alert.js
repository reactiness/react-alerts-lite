import React, { Component } from "react";
import {
  defaultStyle,
  containerStyle,
  alertStyles,
  iconStyle,
  closeButtonStyle,
  contentStyle,
  alertIcons
} from "../css/styles";
import close from "../assets/x.svg";

const createHandlers = (remove, id) => {
  const handleRemove = () => {
    remove(id);
  };
  return {
    handleRemove
  };
};

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    };
    this.interval = null;
    this.handlers = createHandlers(props.remove, props.id);
  }

  componentDidMount() {
    this.interval = setTimeout(this.handlers.handleRemove, this.props.timeout);
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
      closeButton,
      id,
      theme,
      ...props
    } = this.props;

    return (
      <div style={{ ...containerStyle, ...transitionStyle }}>
        <div
          style={{
            ...defaultStyle,
            ...theme,
            ...alertStyles[type]
          }}
        >
          <div style={iconStyle}>
            <img
              src={icon ? alertIcons[icon] : alertIcons[type]}
              style={{ margin: "0 auto" }}
            />
          </div>
          <div style={contentStyle}>{content}</div>
          {closeButton && (
            <div style={iconStyle} onClick={this.handlers.handleRemove}>
              <img src={close} style={{ margin: "0 auto" }} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
