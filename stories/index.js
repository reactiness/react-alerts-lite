import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";
import { FadeAndSlideTransition } from "../src/transitions/FadeSlide";

function createAlert() {
  Alerts.success({
    content: "popipoipoipoi",
    timeout: 2000,
    align: "center",
    transition: FadeAndSlideTransition,
    duration: 500,
    position: "bottom-full",
    onClose: () => console.log("alert has closed")
  });
}

storiesOf("Alerts", module)
  .add("Success notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.success({
            content: "Success Alert",
            timeout: 2000,
            align: "center",
            transition: FadeAndSlideTransition,
            duration: 500,
            position: "bottom-full",
            onClose: () => console.log("alert has closed")
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Error notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.error({
            content: "Error alert",
            timeout: 2000,
            align: "center",
            transition: FadeAndSlideTransition,
            duration: 500,
            position: "bottom-full",
            onClose: () => console.log("alert has closed")
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Warning notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.warning({
            content: "Warning alert",
            timeout: 2000,
            align: "center",
            transition: FadeAndSlideTransition,
            duration: 500,
            position: "bottom-full",
            onClose: () => console.log("alert has closed")
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Info notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.info({
            content: "Info alert",
            timeout: 2000,
            align: "center",
            transition: FadeAndSlideTransition,
            duration: 500,
            position: "bottom-full",
            onClose: () => console.log("alert has closed")
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Basic notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.basic({
            content: "Basic alert",
            timeout: 2000,
            align: "center",
            transition: FadeAndSlideTransition,
            duration: 500,
            position: "bottom-full",
            onClose: () => console.log("alert has closed")
          })
        }
      >
        create
      </button>
    </div>
  ));
