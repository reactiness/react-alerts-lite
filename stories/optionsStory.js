import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

storiesOf("Options", module)
  .add("No Close Button", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            closeButton: false
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Timeout set to 1 second", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            timeout: 1000
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Duration set to 3 seconds", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            duration: 2000
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("onClose Callback", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            onClose: () => alert("onClose callback")
          })
        }
      >
        create
      </button>
    </div>
  ));
