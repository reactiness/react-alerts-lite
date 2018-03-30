import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { Alerts } from "../core";
import { ScaleSlideRight } from "../transitions/ScaleSlideRight";
import { ScaleSlideUp } from "../transitions/ScaleSlideUp";

const customTransitions = [
  {
    name: "custom-transition",
    transition: ScaleSlideRight
  },
  {
    name: "custom-transition-two",
    transition: ScaleSlideUp
  }
];

const defaultProps = {
  transition: "fade",
  duration: 2000
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "basic",
      timeout: 5000
    };
    this.handleType = this.handleType.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
    this.handlePush = this.handlePush.bind(this);
  }

  handleType(event) {
    this.setState({ type: event.target.value });
  }
  handleTimeout(event) {
    this.setState({ timeout: event.target.value });
  }
  handlePush(props) {
    Alerts.push({ ...this.state, ...props });
  }

  render() {
    return (
      <div style={{ backgroundColor: "grey", height: "100%" }}>
        <AlertProvider
          transitions={customTransitions}
          defaultProps={defaultProps}
          theme="flat-rounded"
          customTheme={{}}
        />
        <div style={{ paddingTop: "400px" }}>
          <select value={this.state.type} onChange={this.handleType}>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
            <option value="info">Info</option>
            <option value="basic">Basic</option>
          </select>
          <select value={this.state.timeout} onChange={this.handleTimeout}>
            <option value={1000}>1000</option>
            <option value={3000}>3000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
            <option value={100000}>100000</option>
          </select>

          <div>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top-full",
                  transition: "fade"
                })
              }
            >
              top full
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top-left",
                  transition: "none"
                })
              }
            >
              topleft
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top",
                  transition: "test"
                })
              }
            >
              top
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top-right",
                  transition: "scale-slide-right"
                })
              }
            >
              topright
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.handlePush({
                  position: "bottom",
                  transition: "slide-right"
                })
              }
            >
              bottom
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "bottom-left",
                  transition: "rotate-left"
                })
              }
            >
              bottomleft
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "bottom-right",
                  transition: "rotate-right"
                })
              }
            >
              bottomright
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.handlePush({
                  position: "bottom-full",
                  transition: "slide-right"
                })
              }
            >
              bottom full
            </button>
          </div>
          <div>
            <button onClick={() => Alerts.remove(this.state.type)}>
              remove info
            </button>
            <button onClick={() => Alerts.remove()}>remove all</button>
          </div>
        </div>
      </div>
    );
  }
}
