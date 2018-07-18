import React from "react";
import API from "../../api/API";

import Header from "./components/Header";
import Content from "./components/Content";

const Model = () => {
	const { header, image, specs } = API;

	return (
		<div className="model">
			<Header image={image} header={header} />
			<Content specs={specs} />
		</div>
	);
};

export default Model;
