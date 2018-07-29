import React from "react";
import PropTypes from "prop-types";

import Header from "./Create-Header";

const DetailedForm = ({ initial, handleSubmit }) => {
	return <Header initial={initial} />;
};

DetailedForm.propTypes = {
	initial: PropTypes.shape({
		company: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		yearStarted: PropTypes.number.isRequired,
		yearEnded: PropTypes.number.isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default DetailedForm;
