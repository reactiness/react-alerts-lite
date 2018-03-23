import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";
import { FadeAndSlideTransition } from "../src/transitions/FadeSlide";

storiesOf("Alerts", module)
  .add("Success notification", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content: "Success Alert",
            type: "success"
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
          Alerts.push({
            content: "Error alert",
            type: "error"
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
          Alerts.push({
            content: "Warning alert",
            type: "warning"
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
          Alerts.push({
            content: "Info alert",
            type: "info"
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
          Alerts.push({
            content: "Basic alert",
            type: "basic"
          })
        }
      >
        create
      </button>
    </div>
  ));
