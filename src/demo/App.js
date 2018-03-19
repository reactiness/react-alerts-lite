
import React from 'react';
import { AlertProvider } from "../core/AlertProvider"
import { MyComponent } from "./MyComponent"
import { Alerts } from "../core"

export default class App extends React.Component {

  createAlert() {
    Alerts.success({
      content:'popipoipoipoi',
      timeout:5000,
      align: 'center'
    })
  }
  render() {
    return (
      <div>
        <MyComponent/>
        <AlertProvider/>
        <button onClick={this.createAlert}> create </button>
      </div>
    );
  }
}


