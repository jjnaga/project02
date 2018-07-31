import React from "react";
import PropTypes from "prop-types";

const InitialForm = ({ handleChange, handleSubmit, model, companies }) => {
	const companyList = companies.map(data => (
		<option key={data} value={data}>
			{data}
		</option>
	));

	return (
		<div className="form-background">
			<form
				className="form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<div className="form-box">
					<select name="company">{companyList}</select>
					<input type="text" name="model" placeholder="Model Name" />
					<input
						type="number"
						placeholder="Year Production Started"
						name="yearStarted"
						min="1950"
						max="2020"
						step="1"
					/>
					<input
						type="number"
						placeholder="Year Production Ended"
						name="yearEnded"
						min="1950"
						max="2020"
						step="1"
					/>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

InitialForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	model: PropTypes.string.isRequired,
	companies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InitialForm;
