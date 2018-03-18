import React from 'react';
import { Alert } from './Alert';
import { store } from "./AlertProvider";
import { actions } from './actions';

let counter = 0;

const add = (args) => {
  store.dispatch(actions.add({
    id: counter,
    ...args,
  }));
  counter ++
}

export class Alerts {
  static error(args) {
    add({...args, type: 'error'});    
  }
  static warning(content, timeout) {
    add({...args, type: 'warning'});    
  } 
  static success(content, timeout) {
    add({...args, type: 'success'});    
  } 
  static info(content, timeout) {
    add({...args, type: 'info'});    
  }
  static basic(content, timeout) {
    add({...args, type: 'basic'});    
  }
};
