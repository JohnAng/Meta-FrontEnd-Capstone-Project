import React, { useState } from "react";

const initialFormData = {
	date: "mm/dd/yyyy",
	time: "17:00",
	guests: "1",
	occasion: "Date",
};

function BookingForm({ availableTimes, updateTimes }) {
	const [formData, setFormData] = useState(initialFormData);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData(initialFormData);
		console.log("Form Submitted");
		// <FeedBack></FeedBack>
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<section className="bookingForm__section">
			<div className="container form_container">
				<form className="bookingForm" onSubmit={handleSubmit}>
					<div className="formlabel">
						<label htmlFor="res-date">Date</label>
						<input
							type="date"
							id="res-date"
							name="date"
							value={formData.date}
							onChange={handleChange}
						/>
					</div>
					<div className="formlabel">
						<label htmlFor="res-time">Time</label>
						<select
							id="res-time"
							name="time"
							value={formData.time}
							onChange={handleChange}
						>
							{availableTimes.map((timeOption) => (
								<option
									key={timeOption.time}
									disabled={!timeOption.available}
									value={timeOption.time}
								>
									{timeOption.time}
								</option>
							))}
						</select>
					</div>
					<div className="formlabel">
						<label htmlFor="guests">Guests</label>
						<input
							type="number"
							placeholder="1"
							min="1"
							max="10"
							id="guests"
							name="guests"
							value={formData.guests}
							onChange={handleChange}
						/>
					</div>
					<div className="formlabel">
						<label htmlFor="occasion">Occasion</label>
						<select
							id="occasion"
							name="occasion"
							value={formData.occasion}
							onChange={handleChange}
						>
							<option>Date</option>
							<option>Birthday</option>
							<option>Anniversary</option>
						</select>
					</div>
					<div className="formlabel submit">
						<button type="submit" className="btn">
							Reserve a table
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default BookingForm;
