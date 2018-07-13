import React, { Component } from "react";

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
				{ready}
				<p />
			</div>
		);
	}
}

export default App;
