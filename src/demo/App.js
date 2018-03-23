import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { MyComponent } from "./MyComponent";
import { Alerts } from "../core";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AlertProvider />
        <MyComponent />
        <button onClick={() => Alerts.push({})} style={{ marginTop: "400px" }}>
          {" "}
          create{" "}
        </button>
      </div>
    );
  }
}
