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
    console.log("storestate", state, action, this.reducers);
    const newState = {};
    for (const prop in this.reducers) {
      console.log('-- prop', prop);
      console.log('--state prop', state[prop]);
      console.log('-- action', action);
      const reducer = this.reducers[prop]
      console.log(' -- reducer ', reducer);
      newState[prop] = reducer(state[prop], action);
    }

    console.log("storestate -- after reducing ", newState, action);
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