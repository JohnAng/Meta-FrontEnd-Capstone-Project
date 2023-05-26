import React, { useState } from "react";
import ConfirmedBooking from "../Reservation/ConfirmedBooking";

const initialFormData = {
	date: "mm/dd/yyyy",
	time: "17:00",
	guests: "1",
	occasion: "Date",
	name: "",
};

function BookingForm({ availableTimes, updateTimes, submitForm }) {
	const [formData, setFormData] = useState(initialFormData);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm(formData);
		setIsSubmitted(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		if (name === "date") {
			const selectedDate = new Date(value); // Convert the selected date to a Date object
			updateTimes(selectedDate); // Call updateTimes with the selected date as a Date object
		}
	};

	return (
		<section className="bookingForm__section">
			<div className="container form_container">
				{isSubmitted ? (
					<ConfirmedBooking formData={formData} />
				) : (
					<fieldset className="formfield">
						<form className="bookingForm"  onSubmit={handleSubmit}>
							<div className="formlabel">
								<label htmlFor="res-date">Date</label>
								<input
									type="date"
									id="res-date"
									name="date"
									value={formData.date}
									onChange={handleChange}
									required
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
										<option key={timeOption.time}>
											{timeOption.available &&
												timeOption.time}
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
							<div className="formlabel">
								<label htmlFor="name">Name*</label>
								<input
									type="text"
									id="name"
									name="name"
									minLength={3}
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="formlabel submit">
								<button
									type="submit"
									className={
										formData.name.length < 3 ||
										formData.name.includes("  ") ||
										formData.date === "mm/dd/yyyy"
											? "btn-disabled"
											: "btn"
									}
									disabled={formData.date === "mm/dd/yyyy" || formData.name.length < 3}
									aria-label="On Click"
								>
									Reserve a table
								</button>
							</div>
						</form>
					</fieldset>
				)}
			</div>
		</section>
	);
}

export default BookingForm;
