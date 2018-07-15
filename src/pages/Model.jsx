import React from "react";
import API from "../../api/API";

const Model = () => {
	const { header, image, specs, config, aftermarket } = API;

	const data = Object.entries(specs).map(([key, value]) => (
		<li key={key}>
			{key}
			{value}
		</li>
	));

	return (
		<div className="test">
			<h1>{header.name}</h1>
			<img src={image} alt={`${header.name}`} />
			<div id="content">
				<ul>{data}</ul>
			</div>
		</div>
	);
};

export default Model;
