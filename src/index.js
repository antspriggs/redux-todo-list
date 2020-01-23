import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer);


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, rootElement);
