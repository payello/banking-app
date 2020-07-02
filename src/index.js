import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer,
  typeof window === "object" && typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION()
    : f => f);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
