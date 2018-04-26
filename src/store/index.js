import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "store/reducers";

const logger = createLogger({
  collapsed: true
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
