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

		this.test = this.test.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
	}

	test(event) {
		this.setState({ company: event.target.value });
	}

	handleModelChange(event) {
		this.setState({ model: event.target.value });
	}

	render() {
		const { company, model, yearStarted, yearEnded } = this.state;

		const companyList = API.companies.map(data => (
			<option key={data} value={data}>
				{data}
			</option>
		));

		return (
			<div className="Create">
				<form className="form-1" action="#">
					<select onChange={this.test}>{companyList}</select>
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
					/>
					<input
						type="number"
						placeholder="Year Production Ended"
						name="points"
						min="1950"
						max="2020"
						step="1"
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Create;
