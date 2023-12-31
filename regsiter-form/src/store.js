import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import rootReducer from "./redux/rootReducer";

import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
