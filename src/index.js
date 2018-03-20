import React from "react";
import { render } from "react-dom";
import Main from "./demo/App";

const App = () => <Main />;
const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;
