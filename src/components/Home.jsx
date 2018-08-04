import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ companies, models }) => {
	companies.sort();
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

Home.propTypes = {
	companies: PropTypes.arrayOf(PropTypes.string).isRequired,
	models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
