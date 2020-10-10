import { rootReducer } from "./reducers/index";
import { applyMiddleware, compose, createStore } from "redux";

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer
);
export default store;
