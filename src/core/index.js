import React from "react";
import { Alert } from "./Alert";
import { store } from "./AlertProvider";
import { actions } from "../state/actions";

let counter = 0;

const add = args => {
  store.dispatch(
    actions.add({
      id: counter,
      ...args
    })
  );
  counter++;
};

export class Alerts {
  static error(args) {
    add({ ...args, type: "error" });
  }
  static warning(args) {
    add({ ...args, type: "warning" });
  }
  static success(args) {
    add({ ...args, type: "success" });
  }
  static info(args) {
    add({ ...args, type: "info" });
  }
  static basic(args) {
    add({ ...args, type: "basic" });
  }
}
