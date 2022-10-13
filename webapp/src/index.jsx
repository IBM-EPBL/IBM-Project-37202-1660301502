import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/custom.scss";
import App from "./App";
import store from "./provider/store"
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode></Provider>
);

reportWebVitals();
