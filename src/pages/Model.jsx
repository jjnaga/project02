import React from "react";
import API from "../../api/API";

const Model = () => {
	const { header, image, specs, config, aftermarket } = API;

	return (
		<div id="cover">
			<h1>{header.name}</h1>
			<img src={image} alt={`${header.name}`} />
		</div>
	);
};

export default Model;
