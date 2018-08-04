import React from "react";
import PropTypes from "prop-types";

const Specs = ({ specs }) => {
	console.log(specs);
	return (
		<div id="specs">
			<ul>
				<li>Horsepower: {specs.horsepower}</li>
				<li>Torque: {specs.torque}</li>
				<li>Weight: {specs.weight}</li>
				<li>0-60: {specs.zeroToSixty}</li>
				<li>0-100: {specs.zeroToHundred}</li>
				<li>Quarter Mile: {specs.quarterMile}</li>
			</ul>
		</div>
	);
};

Specs.defaultProps = {
	specs: PropTypes.bool,
};

Specs.propTypes = {
	specs: PropTypes.shape({
		horsepower: PropTypes.number.isRequired,
		torque: PropTypes.number.isRequired,
		weight: PropTypes.number.isRequired,
		zeroToSixty: PropTypes.number.isRequired,
		zeroToHundred: PropTypes.number.isRequired,
		quarterMile: PropTypes.number.isRequired,
	}),
};

export default Specs;
