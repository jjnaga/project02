import React from "react";
import PropTypes from "prop-types";

import Header from "./Create-Header";

const DetailedForm = ({ initial, handleChange, handleSubmit }) => {
	return (
		<div>
			<Header initial={initial} className="create-header" />
			<div className="form-background">
				<form
					className="form-box"
					onChange={handleChange}
					/* onSubmit={handleSubmit} */
				>
					<input
						type="number"
						placeholder="Horsepower"
						name="horsepower"
					/>
					<input
						type="number"
						placeholder="Torque"
						name="horsepower"
					/>
					<input type="number" placeholder="Weight" name="weight" />
					<input
						type="number"
						placeholder="0-60"
						step="0.1"
						name="zeroToSixty"
					/>
					<input
						type="number"
						placeholder="Quater Mile"
						step="0.1"
						name="quarterMile"
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

DetailedForm.propTypes = {
	initial: PropTypes.shape({
		company: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		yearStarted: PropTypes.number.isRequired,
		yearEnded: PropTypes.number.isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default DetailedForm;
