import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./rootReducer";

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
const middleware = [thunk, historyMiddleware, logger];

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );
}
