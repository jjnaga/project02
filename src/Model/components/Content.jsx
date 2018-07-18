import React from "react";
import PropTypes from "prop-types";

const Content = ({ specs }) => (
	<div id="Content">
		<ul>
			<li>Horsepower: {specs.horsepower}</li>
			<li />
			<li />
			<li />
			<li />
		</ul>
	</div>
);

Content.defaultProps = {
	specs: PropTypes.any,
};

Content.propTypes = {
	specs: PropTypes.objectOf({
		horsepower: PropTypes.number,
	}),
};

export default Content;
