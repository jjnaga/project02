import React from "react";
import { Link } from "react-router-dom";

class HomeBase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			models: [],
		};
	}

	componentDidMount() {
		// eslint-disable-next-line
		const company = this.props.match.params.company;

		fetch(`http://localhost:3001/${company}`, {
			method: "get",
			headers: {},
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					models: data,
				});
			})
			.catch(err => console.log(`Error: ${err}`));
	}

	render() {
		const { models } = this.state;

		// I don't think we can use object desonctructing for react-router props.
		// eslint-disable-next-line
		const company = this.props.match.params.company;

		const modelList = models.map(model => (
			<div key={model}>
				<Link to={`${company}/${model}`}>
					<button type="button" className="home-button">
						{model}
					</button>
				</Link>
			</div>
		));
		return (
			<div className="HomeBase">
				<p>Oh Hi {company}</p>

				<div className="modelList">{modelList}</div>
			</div>
		);
	}
}

export default HomeBase;
