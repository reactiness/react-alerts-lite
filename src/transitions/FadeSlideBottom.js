import Transition from "react-transition-group/Transition";
import React from "react";

export function FadeSlideBottom({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, transform, height, max-height",
    width: "100%"
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateY(+100%)",
      // height: "0px"
      maxHeight: "0px"
    },
    entered: {
      opacity: 1,
      transform: "translateY(0)",
      // height: "40px"
      maxHeight: "400px"
    },
    exiting: {
      opacity: 0,
      transform: "translateY(-100%)",
      // height: "0px"
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
        console.log(" -- STATUS ", status);
        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign(
            {},
            children.props.style,
            defaultStyle,
            currentStyles
          )
        });
      }}
    </Transition>
  );
}
