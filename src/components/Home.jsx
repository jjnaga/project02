import React from "react";
import { Link } from "react-router-dom";

const Home = ({ companies }) => {
	const companyList = companies.map(company => (
		<li key={company}>
			<Link to={company}>{company}</Link>
		</li>
	));

	return (
		<div>
			<ul>{companyList}</ul>
		</div>
	);
};

export default Home;
