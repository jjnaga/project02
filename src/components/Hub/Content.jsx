import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Content = ({ specs }) => (
	<div id="Content">
		<ul>
			<li>
				<Link to="/">Specs</Link>
			</li>
			<li>
				<Link to="/config">Configuration</Link>
			</li>
			<li>
				<Link to="/aftermarket">Aftermarket</Link>
			</li>
			<li>
				<Link to="/faq">F&Q</Link>
			</li>
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
