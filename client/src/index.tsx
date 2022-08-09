import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { setupStore } from "./store";

import "./scss/app.scss";

const store = setupStore();
const $root = document.getElementById("root");

if ($root) {
  const root = ReactDOM.createRoot($root);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
