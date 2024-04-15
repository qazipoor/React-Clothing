export const loggerMiddleware = state => next => action => {
  if (!action.type) {
    return next(action);
  }

  console.log("Type: ", action.type);
  console.log("Payload: ", action.payload);
  console.log("Current State: ", store.getState());

  next(action);

  console.log("Next state: ", state.getState());
};
