import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { MyComponent } from "./MyComponent";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export default class App extends React.Component {
  createAlert() {
    Alerts.success({
      content: "popipoipoipoi",
      timeout: 5000,
      align: "center",
      transition: FadeAndSlideTransition,
      duration: 500
    });
  }
  render() {
    return (
      <div>
        <MyComponent />
        <AlertProvider />
        <button onClick={this.createAlert}> create </button>
      </div>
    );
  }
}
