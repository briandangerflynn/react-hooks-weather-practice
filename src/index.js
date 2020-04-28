import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Store } from "./store.js";

ReactDOM.render(
  <Store>
    <App />
  </Store>, document.getElementById("root"));
