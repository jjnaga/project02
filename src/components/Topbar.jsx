import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div className="navbar">
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/create">Create Hub</Link>
		</li>
	</div>
);

export default Header;
