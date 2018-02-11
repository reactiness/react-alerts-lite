export class Store {
  
  constructor () {
    this.state = {}
  };
  
  get Value() {
    return this.state;
  }

  dispatch() {
    console.log('not imp');
  }

  subscribe() {

  }

}