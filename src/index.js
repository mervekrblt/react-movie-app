import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./reduxStore";
import "./index.css";
import App from "./App";
import Nav from "./components/base/Nav";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Nav />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
