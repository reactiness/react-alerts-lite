
import React from 'react';
import { AlertProvider } from "../core/AlertProvider"
import { MyComponent } from "./MyComponent"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent/>

        <MyComponent/>

        <MyComponent/>
        <AlertProvider/>
      </div>

    );
  }
}


