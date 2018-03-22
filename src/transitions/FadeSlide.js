import Transition from "react-transition-group/Transition";
import React from "react";

export default function FadeAndSlideTransition({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, transform",
    width: "100%"
  };
  const transitionStyles = {
    // Start with component invisible and shifted up by 10%
    entering: {
      opacity: 0,
      transform: "translateY(-10%)"
    },
    // Transition to component being visible and having its position reset.
    entered: {
      opacity: 1,
      transform: "translateY(0)"
    },
    // Fade element out and slide it back up on exit.
    exiting: {
      opacity: 0,
      transform: "translateY(-10%)"
    }
  };

  // Wrap child node in <Transition />.
  return (
    <Transition
      in={inProp}
      timeout={{
        // Set 'enter' timeout to '0' so that enter animation
        // will start immediately.
        enter: 0,
        // Set 'exit' timeout to 'duration' so that the 'exited'
        // status won't be applied until animation completes.
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
