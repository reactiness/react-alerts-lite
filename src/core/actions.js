export default actions = {
  add, 
  remove,
}

const add = (alert) => {
  return {
    type: 'ADD',
    payload: alert,
  }
};

const remove = (alert) => {
  return {
    type: 'REMOVE',
    payload: alert,
  }
};