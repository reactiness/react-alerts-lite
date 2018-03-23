import React from "react";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export const MyComponent = () => {
  return (
    <div>
      {Alerts.push({
        type: "success",
        position: "top-full",
        content: "success alert"
      })}
    </div>
  );
};
