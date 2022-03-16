import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
