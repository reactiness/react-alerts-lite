import React from 'react';
import { Alerts } from "../core"

export const MyComponent = () => {
  return (
    <div>
      some content
      {Alerts.error('popipoipoipoi', 5000)}

      {Alerts.error('popipoipoipoi', 10000)}
    </div>
  );
};
