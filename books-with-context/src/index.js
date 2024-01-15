import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <Provider value={5}>
      <App />;
    </Provider>
  </div>
);
