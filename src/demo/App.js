import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { MyComponent } from "./MyComponent";
import { Alerts } from "../core";
import { alertConstants } from "../core/constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: alertConstants.basic,
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
            <option value={alertConstants.error}>Error</option>
            <option value={alertConstants.warning}>Warning</option>
            <option value={alertConstants.success}>Success</option>
            <option value={alertConstants.info}>Info</option>
            <option value={alertConstants.basic}>Basic</option>
          </select>
          <select value={this.state.timeout} onChange={this.handleTimeout}>
            <option value={1000}>1000</option>
            <option value={3000}>3000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
            <option value={100000}>100000</option>
          </select>

          <div>
            <button onClick={() => this.handlePush({ position: "top-full" })}>
              top full
            </button>
          </div>
          <div>
            <button onClick={() => this.handlePush({ position: "top-left" })}>
              topleft
            </button>
            <button onClick={() => this.handlePush({ position: "top" })}>
              top
            </button>
            <button onClick={() => this.handlePush({ position: "top-right" })}>
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
            <button onClick={() => Alerts.remove("info")}>remove info</button>
            <button onClick={() => Alerts.remove()}>remove all</button>
          </div>
        </div>
      </div>
    );
  }
}
