import React from 'react';
import { Alerts } from "../core"

export const MyComponent = () => {
  return (
    <div>
      {Alerts.error({
        content:'popipoipoipoi',
        timeout:5000
      })}

      {Alerts.error({
        content:'popipoipoipoi',
        timeout:8000
      })}
    </div>
  );
};
