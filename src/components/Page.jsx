import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import API from "../../api/API";
import Specs from "./Page/specs";
import Config from "./Page/config";
import Aftermarket from "./Page/aftermarket";
import FAQ from "./Page/faq";

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
						<Link to="/BMW/specs">Specs</Link>
					</li>
					<li>
						<Link to="/BMW/config">Config</Link>
					</li>
					<li>
						<Link to="/BMW/aftermarket">Aftermarket</Link>
					</li>
					<li>
						<Link to="/BMW/faq">FAQ</Link>
					</li>
				</ul>
			</nav>

			<main>
				{/* TODO: Don't hardcode /BMW/*, instead have it use parent route  */}
				<Switch>
					<Route
						path="/BMW/specs"
						render={props => <Specs {...props} specs={specs} />}
					/>
					<Route path="/BMW/config" component={Config} />
					<Route path="/BMW/aftermarket" component={Aftermarket} />
					<Route path="/BMW/faq" component={FAQ} />
				</Switch>
			</main>
		</div>
	);
};

export default Page;
