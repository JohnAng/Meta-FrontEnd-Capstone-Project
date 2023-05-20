import React from "react";
import TestimonialCard from "./TestimonialCard";

import profilePicture from "../images/testim1.png";
import profilePicture2 from "../images/testim2.png";
import profilePicture3 from "../images/testim3.png";
import profilePicture4 from "../images/testim4.png";

const testimonials = [
	{
		rating: 5,
		photo: profilePicture,
		name: "John",
		review: "Awesome food!",
		id: 1,
	},
	{
		rating: 5,
		photo: profilePicture2,
		name: "Annie",
		review: "Greek salad was fresh and cool",
		id: 2,
	},
	{
		rating: 5,
		photo: profilePicture3,
		name: "Victoria",
		review: "Bruschetta was tasteful and light",
		id: 3,
	},
	{
		rating: 5,
		photo: profilePicture4,
		name: "Peter",
		review: "Great food and great space",
		id: 4,
	},
];

export default function Testimonials() {
	return (
		<section className="testimonial__section">
			<h2 className="testimonials">Testimonials</h2>
			<div className="container">
				{testimonials.map((testimonial) => (
					<TestimonialCard
						key={testimonial.id}
						rating={testimonial.rating}
						photo={testimonial.photo}
						name={testimonial.name}
						review={testimonial.review}
					/>
				))}
			</div>
		</section>
	);
}
