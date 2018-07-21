import React from "react";
import PropTypes from "prop-types";

const Specs = ({ specs }) => (
	<div id="specs">
		<ul>
			<li>Horsepower: {specs.horsepower}</li>
			<li>Torque: {specs.torque}</li>
			<li>Weight: {specs.weight}</li>
			<li>0-60: {specs.zeroToSixty}</li>
			<li>0-10: {specs.zeroToHundred}</li>
			<li>Quarter Mile: {specs.quarterMile}</li>
		</ul>
	</div>
);

Specs.defaultProps = {
	specs: PropTypes.bool,
};

Specs.propTypes = {
	specs: PropTypes.objectOf({
		horsepower: PropTypes.number.isRequired,
		torque: PropTypes.number.isRequired,
		weight: PropTypes.number.isRequired,
		zeroToSixty: PropTypes.number.isRequired,
		zeroToHundred: PropTypes.number.isRequired,
		quarterMile: PropTypes.number.isRequired,
	}),
};

export default Specs;
