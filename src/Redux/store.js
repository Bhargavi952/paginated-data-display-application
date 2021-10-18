import { createStore, applyMiddleware, compose } from "redux";
import { userDeatilsReducer } from "./reducers";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userDeatilsReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
