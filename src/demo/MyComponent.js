import React from "react";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export const MyComponent = () => {
  return (
    <div>
      {Alerts.push({
        type: "success",
        position: "top-full",
        timeout: 10000000,
        content: "Success Alert"
      })}
    </div>
  );
};
