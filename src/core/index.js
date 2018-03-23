import React from "react";
import { Alert } from "./Alert";
import { store } from "./AlertProvider";
import { actions } from "../state/actions";
import { defaultAlertArgs } from "../core/constants";

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
  static push(args) {
    add({ ...defaultAlertArgs, ...args });
  }
}
