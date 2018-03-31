export const add = alert => ({
  type: "ADD",
  payload: alert
});

export const remove = alert => ({
  type: "REMOVE",
  payload: alert
});

export const removeType = type => ({
  type: "REMOVE_TYPE",
  payload: type
});

export const removeAll = () => ({
  type: "REMOVE_ALL"
});

export const addDefaultProps = props => ({
  type: "ADD_DEFAULT_PROPS",
  payload: props
});
