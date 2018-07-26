import React from "react";
import { Switch, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Page from "./components/Page";
import Create from "./components/Create";

import API from "../api/API";

const App = () => {
	const { companies } = API;
	return (
		<div className="container">
			<Topbar />
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Home companies={companies} />}
				/>
				<Route path="/BMW" component={Page} />
				<Route path="/create" component={Create} />
			</Switch>
		</div>
	);
};

export default App;
