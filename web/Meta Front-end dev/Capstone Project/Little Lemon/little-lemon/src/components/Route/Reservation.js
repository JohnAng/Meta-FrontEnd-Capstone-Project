import React from "react";
import BookingForm from "../Reservation/BookingForm";
import restaurant from "../../images/restaurant.jpg";

export default function Reservation({ availableTimes, updateTimes }) {
	return (
		<>
			<section className="booking__section">
				<div className="container booking__container">
					<img
						src={restaurant}
						alt="restaurant"
						className="reservation_image"
					/>
					<h2>Table Reservation</h2>
				</div>
			</section>
			<BookingForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}
			/>
		</>
	);
}
