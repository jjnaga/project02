import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div className="navbar">
		<li>
			<Link to="/">Home</Link>
		</li>
		<button type="button">Create Hub</button>
	</div>
);

export default Header;
