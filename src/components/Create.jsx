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
			detailed: {
				horsepower: 0,
				torque: 0,
				weight: 0,
				zeroToSixity: 0,
				quarterMile: 0,
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		this.setState({ stage: 2 });
		event.preventDefault();
	}

	handleSubmit2(event) {
		event.preventDefault();
	}

	render() {
		const {
			companies,
			stage,
			model,
			company,
			yearEnded,
			yearStarted,
		} = this.state;

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
			case 2: {
				const initial = {
					company,
					model,
					yearStarted,
					yearEnded,
				};
				return (
					<DetailedForm
						initial={initial}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit2}
					/>
				);
			}
			default:
				return <p>Error</p>;
		}
	}
}

export default Create;
