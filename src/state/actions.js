export const actions = {
  add,
  remove
};

function add(alert) {
  return {
    type: "ADD",
    payload: alert
  };
}

function remove(alert) {
  return {
    type: "REMOVE",
    payload: alert
  };
}

function removeType(type) {
  return {
    type: "REMOVE_TYPE",
    payload: type
  };
}
