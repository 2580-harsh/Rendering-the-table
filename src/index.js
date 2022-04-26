import React from "react";
import ReactDOM  from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {Navbar} from "./Navbar";
import "./index.css";
import App from "./App";
import MainContent from "./MainContent";

ReactDOM.render(<App/>,document.getElementById("root"));
