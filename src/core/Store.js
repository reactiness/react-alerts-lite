export class Store {

  constructor (reducers={}, initialState={}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  };

  value() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action)
  }

  reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      const reducer = this.reducers[prop]
      console.log(reducer);
      console.log("prop ", prop);
      console.log("state prop ", state[prop]);
      console.log("state ", state);
      console.log("action ",action);
      console.log("this.reducers ",this.reducers);
      console.log(reducer(state[prop], action));
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return {};
  }

  subscribe() {

  }

}