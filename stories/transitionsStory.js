import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alerts } from "../src/core";
import { AlertProvider } from "../src/core/AlertProvider";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

storiesOf("Transitions", module)
  .add("No Transition", () => (
    <div>
      <AlertProvider />
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
      <AlertProvider />
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
  .add("Slide Right", () => (
    <div>
      <AlertProvider />
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
      <AlertProvider />
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
  .add("Slide Up Through", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "info",
            transition: "slide-up-through",
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
      <AlertProvider />
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
  .add("Rotate Left", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "rotate-left",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Rotate Right", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "rotate-right",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale", () => (
    <div>
      <AlertProvider />
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
      <AlertProvider />
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
      <AlertProvider />
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
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-left",
            position: "bottom-right"
          })
        }
      >
        create
      </button>
    </div>
  ))
  .add("Scale Slide Right", () => (
    <div>
      <AlertProvider />
      <button
        onClick={() =>
          Alerts.push({
            content,
            type: "basic",
            transition: "scale-slide-right",
            position: "bottom-left"
          })
        }
      >
        create
      </button>
    </div>
  ));
