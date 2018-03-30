export const actions = {
  add,
  remove,
  removeType,
  removeAll,
  addDefaultProps
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

function addDefaultProps(props) {
  return {
    type: "ADD_DEFAULT_PROPS",
    payload: props
  };
}

function addCustomTheme(theme) {
  return {
    type: "ADD_CUSTOM_THEME",
    payload: theme
  };
}
