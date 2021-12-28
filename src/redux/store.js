import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers/reducers";
const intialState = {
  students: {
    studentsInfo: localStorage.getItem("chart")
      ? JSON.parse(localStorage.getItem("chart"))
      : [],
      loading:false
  },
};
// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  intialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);
