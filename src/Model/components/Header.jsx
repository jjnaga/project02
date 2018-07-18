import React from "react";
import PropTypes from "prop-types";

const Header = ({ image, header }) => (
	<div id="Header">
		<h1 className="name">{header.name}</h1>
		<img id="image" src={image} alt={`${header.name}`} />
	</div>
);

Header.defaultProps = {
	image: "",
	header: {},
};

Header.propTypes = {
	image: PropTypes.string,
	header: PropTypes.objectOf({
		name: PropTypes.string,
	}),
};

export default Header;
