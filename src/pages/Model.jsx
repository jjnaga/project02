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
		<div className="container">
			<div className="header">
				<h1 className="name">{header.name}</h1>
				<img id="image" src={image} alt={`${header.name}`} />
			</div>
			<div className="content">
				<ul>{data}</ul>
			</div>
		</div>
	);
};

export default Model;
