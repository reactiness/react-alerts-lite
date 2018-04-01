import React, { Component } from "react";
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
      style: transitionStyle,
      icon,
      closeButton,
      theme,
      className
    } = this.props;

    return (
      <div
        className={`${CLASS_PREFIX}container ${className}`}
        style={transitionStyle}
      >
        <div className={`${CLASS_PREFIX}wrapper ${theme} ${type}`}>
          <div className={`${CLASS_PREFIX}icon`}>
            <img src={icon} />
          </div>
          <div className={`${CLASS_PREFIX}content`}>{content}</div>
          {closeButton && (
            <div
              className={`${CLASS_PREFIX}close`}
              onClick={this.handlers.handleRemove}
            >
              <img src={close} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
