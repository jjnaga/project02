import React, { Component } from "react";
import Page from "./BMW/Page";

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
				<Page />
			</div>
		);
	}
}

export default App;
