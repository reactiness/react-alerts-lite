import React from "react";
import { Alert } from "./Alert";
import { store } from "./AlertProvider";
import { actions } from "../state/actions";
import { defaultAlertArgs } from "./constants";

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

const remove = type => {
  type
    ? store.dispatch(actions.removeType(type))
    : store.dispatch(actions.removeAll());
};

export class Alerts {
  static push(args) {
    add({ ...defaultAlertArgs, ...args });
  }
  static remove(type) {
    remove(type);
  }
}
