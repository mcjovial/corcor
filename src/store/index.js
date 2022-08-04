import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store;
