export const actions = {
  add,
  remove,
  removeType,
  removeAll
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

function removeAll() {
  return {
    type: "REMOVE_ALL"
  };
}
