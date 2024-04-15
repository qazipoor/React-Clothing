import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (state) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }

    console.log('Type: ', action.type);
    console.log('Payload: ', action.payload);
    console.log('Current State: ', store.getState());

    next(action);

    console.log('Next state: ', state.getState());
}

const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
