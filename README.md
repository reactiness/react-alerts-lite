[![CircleCI](https://circleci.com/gh/reactiness/react-alerts-lite.svg?style=svg)](https://coveralls.io/github/reactiness/react-alerts-lite?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/reactiness/react-alerts-lite/badge.svg?branch=master)](https://coveralls.io/github/reactiness/react-alerts-lite?branch=master)

# react-alerts-lite

## Synopsis

A minimal library for rendering alert / toasts / popups / notifications in react apps.

## Storybook

https://reactiness.github.io/react-alerts-lite/

## Code Example

### Importing AlertProvider
Import the AlertProvider and render before you need to use an Alert. 
You must only render the AlertProvider once.

```jsx
import React, { Component } from "react";
import { AlertProvider } from "react-alerts-lite";

export class App extends Component {
  render() {
    return (
      <div>
        <AlertProvider/>
        <Root/>
      </div>
    );
  }
}
```

### Importing Alerts
Import Alerts where you need to display an alert.

```jsx
import React from "react";
import { Alerts } from "react-alerts-lite";

export class Demo extends React.Component {
  render() {
    return (
      <button onClick={() =>
        Alerts.push({
          type: "success",
          position: "bottom-full",
          transition: "fade"
        })
        }
      >
        Click me
      </button>
    )
  }
}
```

## Installation

react-alerts-lite requires react and react-dom to run. It has a single dependency on react-transition-group.

```sh
$ npm install react-alerts-lite
```
or
```sh
$ yarn add react-alerts-lite
```

## API Reference

### AlertProvider
#### Themes:
```jsx
<AlertProvider
  theme="simple" | "rounded" | "shadowed" | "flat" | "bordered"
  transitions=""
/>
```
#### Custom transitions: Create your own
The transitions prop accepts an array of transitions with the :name and :transitions keys. 
Refer to react-transition-group documentation on creating transitions
See bottom of page for simple template
Note: maxHeight and duration are passed into transitions as props - use them where needed.
```jsx
import ScaleSlideRight from "../path/to/my/react-transition-group-custom-transition";
import ScaleSlideRight from "../path/to/my/react-transition-group-custom-transition";

const customTransitions = [
  {
    name: "custom-transition_one",
    transition: ScaleSlideRight
  },
  {
    name: "custom-transition-two",
    transition: ScaleSlideUp
  }
];
```
pass your transitions array into AlertProvider
```jsx
<AlertProvider
  transitions=[customTransitions]
/>
```
reference your transition with the :name you provided.
```jsx
<button onClick={() =>
    Alerts.push({
      transition: "custom-transition_one"
    })
  }
>
  Click me
</button>
```

#### DefaultProps:
you can pass default props into the AlertProvider to apply to all alerts.
Props passed directly to an Alert take precedence so you can overwrite these where necessary.
```jsx
  <AlertProvider
    defaultProps={
      type: "error",
      position: "bottom",
      transition: "slide-up"
    }
  />
```
Now when you render an alert with no props defaultProps will take precedence over stock props.
```jsx
<button onClick={
  () => Alerts.push()
  }
>
  Click me
</button>
```
Note: the alert created here would now have type "error", position: "bottom", and transition: "slide-up"

### Alert
An alert accepts the following arguments
```jsx
  Alerts.push({
    type: "basic" | "error" | "warning" | "info" | "error"
    timeout: <int>
    duration: <int>
    position: "top-full" | "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right" | "bottom-full"
    content: <your content to render>
    closeButton: {true | false}
    onClose: () => {alert("my alert has unmounted")}
    maxHeight: <int>
    transition: "none" | "slide-up" | "slide-down" | "slide-up-through" | "fade" | "slide-right" | "slide-left" | "rotate-left" | "rotate-right" | "scale" | "scale-slide-down" | "scale-slide-left" | "scale-slide-right" | "scale-slide-up"
  })
```

- timeout: How long before your alert unmounts
- duration: How long the transition animation will take
- closeButton: Whether to display the close button or not
- onClose: callback for when the alert unmounts
- maxHeight: Used in transitions to determine positioning of alerts in stack


### Custom Transitions Example
Example of a simple fade transition.
```jsx
import Transition from "react-transition-group/Transition";
import React from "react";

export function Fade({ children, maxHeight, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, max-height"
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      maxHeight: "0px"
    },
    entered: {
      opacity: 1,
      maxHeight
    },
    exiting: {
      opacity: 0,
      maxHeight: "0px"
    }
  };

  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration
      }}
    >
      {status => {
        if (status === "exited") {
          return null;
        }
        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: { ...defaultStyle, ...currentStyles }
        });
      }}
    </Transition>
  );
}

```
## Contributors

I'll post issues and enhancements as i find them - feel free to contribute :)

## License

MIT

### Tech

peer-dependencies: react, react-dom
dependencies: react-transition-group
