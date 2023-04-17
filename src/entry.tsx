import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./components/App";
import { setupStore } from "./redux/store";
const domContainer = document.querySelector("#app");

if (domContainer) {
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    <Provider store={setupStore(undefined)}>
      <App />
    </Provider>,
  );
}
