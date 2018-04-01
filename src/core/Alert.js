import React, { Component } from "react";
import {
  iconStyle,
  closeButtonStyle,
  contentStyle,
  alertIcons
} from "../css/styles";
import close from "../assets/x.svg";
import { CLASS_PREFIX } from "./constants";

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
      <div
        className="__rta_container"
        style={ transitionStyle }
      >
        <div
          className={`${CLASS_PREFIX}wrapper ${theme} ${type}`}
        >
          <div className="__rta_icon" style={iconStyle}>
            <img
              src={icon ? alertIcons[icon] : alertIcons[type]}
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="__rta_content" style={contentStyle}>
            {content}
          </div>
          {closeButton && (
            <div
              className="__rta_close"
              style={iconStyle}
              onClick={this.handlers.handleRemove}
            >
              <img src={close} style={{ margin: "0 auto" }} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
