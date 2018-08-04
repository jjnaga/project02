import React from "react";
import { Switch, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Home from "./components/Home";
import HomeBase from "./components/HomeBase";
import Hub from "./components/Hub";
import Create from "./components/Create";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companies: [],
			models: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/", {
			method: "get",
			headers: {},
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					companies: data.companies,
					models: data.models,
				});
			})
			.catch(err => console.log(`Error: ${err}`));
	}

	render() {
		const { companies, models } = this.state;
		return (
			<div className="container">
				<Topbar />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Home companies={companies} models={models} />
						)}
					/>
					<Route exact path="/create" component={Create} />
					<Route path="/:company/:model" component={Hub} />
					<Route path="/:company" component={HomeBase} />
				</Switch>
			</div>
		);
	}
}

export default App;
