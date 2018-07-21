import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import API from "../../api/API";
import Specs from "./components/specs";
import Config from "./components/config";
import Aftermarket from "./components/aftermarket";
import FAQ from "./components/faq";

const Page = () => {
	const { header, image, specs } = API;

	const imageBackground = {
		background: `url(${image})`,
		backgroundPosition: "center",
	};

	return (
		<div className="container">
			<header id="omfg" style={imageBackground}>
				{header.name}
			</header>
			<nav>
				<ul>
					<li>
						<Link to="/">Specs</Link>
					</li>
					<li>
						<Link to="/config">Config</Link>
					</li>
					<li>
						<Link to="/aftermarket">Aftermarket</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
				</ul>
			</nav>

			<main>
				<Switch>
					<Route
						exact
						path="/"
						render={props => <Specs {...props} specs={specs} />}
					/>
					<Route path="/config" component={Config} />
					<Route path="/aftermarket" component={Aftermarket} />
					<Route path="/faq" component={FAQ} />
				</Switch>
			</main>
		</div>
	);
};

export default Page;
