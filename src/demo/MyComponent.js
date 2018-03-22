import React from "react";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export const MyComponent = () => {
  return (
    <div>
      {Alerts.success({
        content: "popipoipoipoi",
        timeout: 1511205151,
        align: "center",
        transition: FadeAndSlideTransition,
        duration: 500,
        position: "bottom"
      })}
    </div>
  );
};
