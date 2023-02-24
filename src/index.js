import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./build.css";
import HomePage from "./Page/HomePage";

const root = ReactDOM.createRoot(document.getElementById("myDocument"));
root.render(
	<BrowserRouter>
		<HomePage />
	</BrowserRouter>,
);
