
import React from 'react';
import { Alerts } from "../core"
import { MyComponent } from "./MyComponent"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent/>
        <Alerts/>
      </div>

    );
  }
}


