import React from 'react';
import { Alerts } from "../core"

export const MyComponent = () => {
  return (
    <div>
      {Alerts.error({
        content:'popipoipoipoi',
        timeout:2000,
        align: 'right'
      })}
      {Alerts.success({
        content:'popipoipoipoi',
        timeout:10000,
        align: 'center'
      })}
    </div>
  );
};
