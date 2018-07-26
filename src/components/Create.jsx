import React from "react";

import InitialForm from "./Create/InitialForm";
import DetailedForm from "./Create/DetailedForm";
import API from "../../api/API";

// TODO: An example page would be super nice, but that's later.
class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 1,
			companies: API.companies,
			company: "",
			model: "",
			yearStarted: 0,
			yearEnded: 0,
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleCompanyChange = this.handleCompanyChange.bind(this);
		// this.handleModelChange = this.handleModelChange.bind(this);
		// this.handleStartChange = this.handleStartChange.bind(this);
		// this.handleEndChange = this.handleEndChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	// handleCompanyChange(event) {
	// 	this.setState({ company: event.target.value });
	// }

	// handleModelChange(event) {
	// 	this.setState({ model: event.target.value });
	// }

	// handleStartChange(event) {
	// 	this.setState({ yearStarted: event.target.value });
	// }

	// handleEndChange(event) {
	// 	this.setState({ yearEnded: event.target.value });
	// }

	handleSubmit(event) {
		this.setState({ stage: 2 });
		event.preventDefault();
	}

	render() {
		const { companies, stage, model } = this.state;

		switch (stage) {
			case 1:
				return (
					<InitialForm
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						model={model}
						companies={companies}
					/>
				);
			case 2:
				return <DetailedForm />;
			default:
				console.log("We fucked up");
		}
	}
}

export default Create;
