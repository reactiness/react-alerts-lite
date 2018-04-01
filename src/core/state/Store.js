export class Store {
  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
    this.subscribers = [];
    this.dispatch = this.dispatch.bind(this);
  }

  value() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach(cb => cb(this.state));
  }

  reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      const reducer = this.reducers[prop];
      newState[prop] = reducer(state[prop], action);
    }
    return newState;
  }

  subscribe(cb) {
    this.subscribers = [...this.subscribers, cb];
    cb(this.state);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== cb);
    };
  }
}
