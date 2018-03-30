import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { Alerts } from "../core";

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
      <div>
        <AlertProvider />
        <div style={{ marginTop: "400px" }}>
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
                  transition: "fade-slide-down-up"
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
                  transition: "fade-slide-down-up"
                })
              }
            >
              topleft
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top",
                  transition: "fade-slide-down-up"
                })
              }
            >
              top
            </button>
            <button
              onClick={() =>
                this.handlePush({
                  position: "top-right",
                  transition: "fade-slide-down-up"
                })
              }
            >
              topright
            </button>
          </div>
          <div>
            <button onClick={() => this.handlePush({ position: "bottom" })}>
              bottom
            </button>
            <button
              onClick={() => this.handlePush({ position: "bottom-left" })}
            >
              bottomleft
            </button>
            <button
              onClick={() => this.handlePush({ position: "bottom-right" })}
            >
              bottomright
            </button>
          </div>
          <div>
            <button
              onClick={() => this.handlePush({ position: "bottom-full" })}
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
