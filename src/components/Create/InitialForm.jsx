import React from "react";
import PropTypes from "prop-types";

const InitialForm = ({ handleChange, handleSubmit, model, companies }) => {
	const companyList = companies.map(data => (
		<option key={data} value={data}>
			{data}
		</option>
	));

	return (
		<div className="InitialForm">
			<form
				className="form-1"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<select>{companyList}</select>
				<input type="text" placeholder="Model Name" value={model} />
				<input
					type="number"
					placeholder="Year Production Started"
					name="points"
					min="1950"
					max="2020"
					step="1"
				/>
				<input
					type="number"
					placeholder="Year Production Ended"
					name="points"
					min="1950"
					max="2020"
					step="1"
				/>
				<input type="submit" value="Submit" />
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
