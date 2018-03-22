import React from "react";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export const MyComponent = () => {
  return (
    <div>
      {Alerts.success({
        content: "popipoipoipoi",
        timeout: 2000,
        align: "center",
        transition: FadeAndSlideTransition,
        duration: 500,
        position: "top-full"
      })}
    </div>
  );
};
