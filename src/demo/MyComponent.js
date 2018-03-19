import React from 'react';
import { Alerts } from "../core"

export const MyComponent = () => {
  return (
    <div>
      {Alerts.success({
        content:'popipoipoipoi',
        timeout:5000,
        align: 'center'
      })}
    </div>
  );
};
