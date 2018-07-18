import React, { Component } from "react";
import Model from "./Model/Model";

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
				<Model />
			</div>
		);
	}
}

export default App;
