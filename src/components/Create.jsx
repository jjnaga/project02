import React from "react";

import API from "../../api/API";

// TODO: An example page would be super nice, but that's later.
class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: "",
			model: "",
			yearStarted: 0,
			yearEnded: 0,
		};

		this.handleCompanyChange = this.handleCompanyChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleStartChange = this.handleStartChange.bind(this);
		this.handleEndChange = this.handleEndChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCompanyChange(event) {
		this.setState({ company: event.target.value });
	}

	handleModelChange(event) {
		this.setState({ model: event.target.value });
	}

	handleStartChange(event) {
		this.setState({ yearStarted: event.target.value });
	}

	handleEndChange(event) {
		this.setState({ yearEnded: event.target.value });
	}

	handleSubmit(event) {
		console.log(`
			1: ${this.state.company}
			2: ${this.state.model}
			3: ${this.state.yearStarted}
			4: ${this.state.yearEnded}
		`);
		event.preventDefault();
	}

	render() {
		const { model } = this.state;

		const companyList = API.companies.map(data => (
			<option key={data} value={data}>
				{data}
			</option>
		));

		return (
			<div className="Create">
				<form className="form-1" onSubmit={this.handleSubmit}>
					<select onChange={this.handleCompanyChange}>
						{companyList}
					</select>
					<input
						type="text"
						placeholder="Model Name"
						value={model}
						onChange={this.handleModelChange}
					/>
					<input
						type="number"
						placeholder="Year Production Started"
						name="points"
						min="1950"
						max="2020"
						step="1"
						onChange={this.handleStartChange}
					/>
					<input
						type="number"
						placeholder="Year Production Ended"
						name="points"
						min="1950"
						max="2020"
						step="1"
						onChange={this.handleEndChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Create;
