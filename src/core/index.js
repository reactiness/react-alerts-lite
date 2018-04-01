import React from "react";
import { Alert } from "./Alert";
import { store } from "./AlertProvider";
import { add, removeAll, removeType } from "../state/actionCreators";
import { defaultAlertArgs } from "./constants";

let counter = 0;

const addAlert = args => {
  console.log("args", args);
  store.dispatch(
    add({
      id: counter,
      ...args
    })
  );
  counter++;
};

const remove = type => {
  type ? store.dispatch(removeType(type)) : store.dispatch(removeAll());
};

export class Alerts {
  static push(args) {
    addAlert({
      ...defaultAlertArgs,
      ...store.state.alerts.defaultProps,
      ...args
    });
  }
  static remove(type) {
    remove(type);
  }
}

export default Alerts;
