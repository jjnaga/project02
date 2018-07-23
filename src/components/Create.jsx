import React from "react";

const Create = () => (
	<div className="Create">
		<form action="#">
			Car:
			<select name="car">
				{/* TODO: Have DB do this. */}
				<option value="BMW">BMW</option>
				<option value="Chevy">Chevy</option>
				<option value="Toyota">Toyota</option>
			</select>
			Model:
			<input type="text" name="Model" />
			Year Start:
			<input
				type="number"
				name="points"
				min="1950"
				max="2020"
				step="1"
				value="2018"
			/>
			Year End:
			<input
				type="number"
				name="points"
				min="1950"
				max="2020"
				step="1"
				value="2018"
			/>
		</form>
	</div>
);

export default Create;
