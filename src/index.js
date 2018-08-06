import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

import Container from "./components/container";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Container />, document.getElementById("root"));
registerServiceWorker();
