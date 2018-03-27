import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { MyComponent } from "./MyComponent";
import { Alerts } from "../core";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AlertProvider />
        {/* <MyComponent /> */}
        <div style={{ marginTop: "400px" }}>
          <div>
            <button
              onClick={() =>
                Alerts.push({ timeout: 1231231, position: "top-full" })
              }
            >
              top full
            </button>
          </div>
          <div>
            <button onClick={() => Alerts.push({ position: "top-left" })}>
              topleft
            </button>
            <button onClick={() => Alerts.push({ position: "top" })}>
              top
            </button>
            <button onClick={() => Alerts.push({ position: "top-right" })}>
              topright
            </button>
          </div>
          <div>
            <button onClick={() => Alerts.push({ position: "bottom" })}>
              bottom
            </button>
            <button onClick={() => Alerts.push({ position: "bottom-left" })}>
              bottomleft
            </button>
            <button onClick={() => Alerts.push({ position: "bottom-right" })}>
              bottomright
            </button>
          </div>
          <div>
            <button onClick={() => Alerts.push({ position: "bottom-full" })}>
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
