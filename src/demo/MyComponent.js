import React from "react";
import { Alerts } from "../core";
import { FadeAndSlideTransition } from "../transitions/FadeSlide";

export const MyComponent = () => {
  return (
    <div>
      {Alerts.success({
        content: "popipoipoipoi",
        timeout: 5000,
        align: "center"
      })}
      {Alerts.warning({
        content: "popipoipoipoi",
        timeout: 3000,
        align: "center"
      })}
      {Alerts.error({
        content: "popipoipoipoi",
        timeout: 6000,
        align: "center",
        transition: FadeAndSlideTransition,
        duration: 1000
      })}
    </div>
  );
};
