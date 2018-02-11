import React from 'react';
import reducer from './reducer';

const store = new Store(reducer, {});

const App = () => {
  return (
    <h1>hello world</h1>
  );
};

export default App;