import React from "react";
import { AlertProvider } from "../core/AlertProvider";
import { MyComponent } from "./MyComponent";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export default class App extends React.Component {
  createAlert() {
    Alerts.success({
      content: "popipoipoipoi",
      timeout: 2000,
      align: "center",
      transition: FadeAndSlideTransition,
      duration: 500,
      position: "bottom-full",
      onClose: () => console.log('alert has closed')
    });
  }
  render() {
    return (
      <div>
        <AlertProvider />
        <MyComponent />
        <button onClick={this.createAlert} style={{ marginTop: "50%" }}>
          {" "}
          create{" "}
        </button>
      </div>
    );
  }
}
