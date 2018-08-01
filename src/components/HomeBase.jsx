import React from "react";

const HomeBase = ({ match }) => (
	<div className="HomeBase">
		<p>Oh Hi {match.params.company}</p>
	</div>
);

export default HomeBase;
