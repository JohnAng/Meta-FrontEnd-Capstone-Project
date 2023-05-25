import React from "react";
import success from "../../images/icons8-success-150.png";

export default function ConfirmedBooking({ formData }) {
	return (
		<section className="confirmation__section">
			<div className="container success">
				<img src={success} alt="success icon" />
				<h3>Your Reservation Is Submitted</h3>
				<p className="success">
					You have succesfully reserved a table on the Little Lemon
					Restaurant
				</p>

				{/* <h4>Reservation Details:</h4>
				<table>
					<tbody>
						<tr>
							<td>Date:</td>
							<td>{formData.date}</td>
						</tr>
						<tr>
							<td>Time:</td>
							<td>{formData.time}</td>
						</tr>
						<tr>
							<td>Guests:</td>
							<td>{formData.guests}</td>
						</tr>
						<tr>
							<td>Occasion:</td>
							<td>{formData.occasion}</td>
						</tr>
						<tr>
							<td>Name:</td>
							<td>{formData.name}</td>
						</tr>
					</tbody>
				</table> */}
			</div>
		</section>
	);
}
