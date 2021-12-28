import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.less";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
