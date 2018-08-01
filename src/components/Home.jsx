import React from "react";
import { Link } from "react-router-dom";

const Home = ({ companies }) => {
	const companyList = companies.map(company => (
		<div key={company}>
			<Link to={company}>
				<button type="button" className="home-button">
					{company}
				</button>
			</Link>
		</div>
	));

	return <div className="Home">{companyList}</div>;
};

export default Home;
