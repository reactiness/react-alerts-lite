import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

storiesOf("Types", module)
  .add("Success notification", () => (
    <div>
      <AlertProvider theme="flat-rounded" />
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
  .add("Error notification", () => (
    <div>
      <AlertProvider />
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
  .add("Warning notification", () => (
    <div>
      <AlertProvider />
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
  .add("Info notification", () => (
    <div>
      <AlertProvider />
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
  .add("Basic notification", () => (
    <div>
      <AlertProvider />
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

storiesOf("Transitions", module)
  .add("No Transition", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "none",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Down", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            type: "success",
            content,
            transition: "slide-down",
            position: "top-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Up", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "error",
            transition: "slide-up",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Down Up", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "warning",
            transition: "slide-down-up",
            position: "top-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Up Down", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "info",
            transition: "slide-up-down",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Fade", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "fade",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Right", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "slide-right",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Slide Left", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "slide-left",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Rotate Left", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "rotate-left",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Rotate Right", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "rotate-right",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale Slide Down", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-down",
            position: "top-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale Slide Up", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-up",
            position: "bottom-full"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale Slide Left", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-left",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale Slide Right", () => (
    <div>
      <AlertProvider theme="flat" />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-right",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ));
