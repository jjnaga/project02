import React, { Component } from "react";
import { Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Page from "./components/Page";

import API from "../api/API";

const App = () => {
	const { companies } = API;

	return (
		<div>
			<Topbar />
			<Route path="/" render={() => <Home companies={companies} />} />
			<Route path="/bmw" component={Page} />
		</div>
	);
};

export default App;
