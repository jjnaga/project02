import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div className="Header">
		<Link to="/" className="header-button">
			Home
		</Link>
		<Link to="/create" className="header-button">
			Create Hub
		</Link>
	</div>
);

export default Header;
