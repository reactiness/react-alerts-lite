import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

storiesOf("Positions", module)
  .add("Top left", () => (
    <div>
      <AlertProvider theme="flat-rounded" />
      <button
        onClick={() =>
          Alerts.push({
            type: "success",
            content,
            position: "top-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Top", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "error",
            position: "top"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Top Right", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "warning",
            position: "top-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Bottom Right", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "info",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Bottom", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            position: "bottom"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Bottom Left", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Bottom Full", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Top Full", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            position: "top-full"
          })
        }
      >
        create
      </button>
    </div>
  ));
