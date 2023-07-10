// libraries
import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
// App
import App from "./App.jsx";
// store and redux
import { createStore } from "./store/create.store.js";
import { Provider } from "react-redux";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
