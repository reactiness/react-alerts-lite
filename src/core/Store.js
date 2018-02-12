export class Store {

  constructor (reducers={}, initialState={}) {
    console.log('init state ', initialState);
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
    this.subscribers = [];

  };

  value() {
    return this.state;
  }

  dispatch(action) {
    console.log("action ", action);
    console.log("this state  ", this.state);
    this.state = this.reduce(this.state, action)
    this.subscribers.forEach(cb => cb(this.state))
  }

  reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      const reducer = this.reducers[prop]
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    console.log("newState", newState);
    return newState;
  }

  subscribe(cb) {
    this.subscribers = [ ...this.subscribers, cb ] 
    cb(this.state);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== cb)
    }
  }

}