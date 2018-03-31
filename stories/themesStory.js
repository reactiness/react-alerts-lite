import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

storiesOf("Themes", module)
  .add("No Theme", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            type: "success",
            content
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Flat", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "error"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Flat Rounded", () => (
    <div>
      <AlertProvider theme="flat-rounded" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "warning"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Rounded", () => (
    <div>
      <AlertProvider theme="rounded" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "info"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Shadowed", () => (
    <div>
      <AlertProvider theme="shadowed" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Bordered", () => (
    <div>
      <AlertProvider theme="bordered" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic"
          })
        }
      >
        create
      </button>
    </div>
  ));