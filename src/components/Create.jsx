import React from "react";

// TODO: An example page would be super nice, but that's later.
const Create = () => (
	<div className="Create">
		<form className="form-1" action="#">
			<p>
				<select name="car">
					{/* TODO: Have DB do this. */}
					<option value="BMW">BMW</option>
					<option value="Chevy">Chevy</option>
					<option value="Toyota">Toyota</option>
				</select>
			</p>
			<p>
				<input type="text" placeholder="Model Name" name="Model" />
			</p>
			<p>
				<input
					type="number"
					placeholder="Year Production Started"
					name="points"
					min="1950"
					max="2020"
					step="1"
				/>
			</p>
			<p>
				<input
					type="number"
					placeholder="Year Production Ended"
					name="points"
					min="1950"
					max="2020"
					step="1"
				/>
			</p>
			<input type="submit" value="Submit" />
		</form>
	</div>
);

export default Create;
