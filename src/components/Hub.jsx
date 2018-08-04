import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import API from "../../api/API";
import Specs from "./Hub/specs";
import Config from "./Hub/config";
import Aftermarket from "./Hub/aftermarket";
import FAQ from "./Hub/faq";

class Hub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	componentDidMount() {
		console.log("componentdidmount - Hub.jsx");
		// eslint-disable-next-line
		const company = this.props.match.params.company;
		// eslint-disable-next-line
		const model = this.props.match.params.model;

		fetch(`http://localhost:3001/${company}/${model}`, {
			method: "get",
			headers: {},
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					data,
				});
			})
			.then(console.log(this.state.data))
			.catch(err => console.log(`Error: ${err}`));
	}

	render() {
		// I get an error when I do this.state.data, vs this.state
		// TOOD: Really, is this the best way to do this? No way right?
		// eslint-disable-next-line
		const { url } = this.props.match;
		const { model, specs } = this.state.data;
		const { image } = API;

		const imageBackground = {
			background: `url(${image})`,
			backgroundPosition: "center",
		};
		return (
			<div className="container">
				<header id="omfg" style={imageBackground}>
					{model}
				</header>
				<nav>
					<ul>
						<li>
							<Link to={`${url}/specs`}>Specs</Link>
						</li>
						<li>
							<Link to={`${url}/config`}>Config</Link>
						</li>
						<li>
							<Link to={`${url}/aftermarket`}>Aftermarket</Link>
						</li>
						<li>
							<Link to={`${url}/faq`}>FAQ</Link>
						</li>
					</ul>
				</nav>

				<main>
					{/* TODO: Don't hardcode /BMW/*, instead have it use parent route  */}
					<Switch>
						<Route
							path={`${url}/specs`}
							render={props => <Specs {...props} specs={specs} />}
						/>
						<Route path={`${url}/config`} component={Config} />
						<Route
							path={`${url}/aftermarket`}
							component={Aftermarket}
						/>
						<Route path={`${url}/faq`} component={FAQ} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default Hub;
