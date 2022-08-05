import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CoinContext from "./CoinContext";

ReactDOM.render(
  <React.StrictMode>
    <CoinContext>
      <App />
    </CoinContext>
  </React.StrictMode>,
  document.getElementById("root")
);
