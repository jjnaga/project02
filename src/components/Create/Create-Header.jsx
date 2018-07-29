import React from "react";
import PropTypes from "prop-types";

const Header = ({ initial }) => {
	const { company, model, yearStarted, yearEnded } = initial;
	return (
		<div className="create-header">
			<h1>
				{model}: {yearStarted} - {yearEnded}
			</h1>
		</div>
	);
};

Header.propTypes = {
	initial: PropTypes.shape({
		company: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		yearStarted: PropTypes.number.isRequired,
		yearEnded: PropTypes.number.isRequired,
	}).isRequired,
};

export default Header;
