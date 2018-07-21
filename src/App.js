import React, { Component } from "react";

import Header from "./components/Header";
import Page from "./components/Page";

class App extends Component {
	constructor() {
		super();
		this.state = {
			ready: "Oh Hi World",
		};
	}

	render() {
		const { ready } = this.state;
		return (
			<div>
				<Header />
				<Page />
			</div>
		);
	}
}

export default App;
