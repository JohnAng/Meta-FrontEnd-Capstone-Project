import React from "react";
import profilePicture from "../images/testim1.png";
import profilePicture2 from "../images/testim2.png";
import profilePicture3 from "../images/testim3.png";
import profilePicture4 from "../images/testim4.png";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
	return (
		<section className="testimonial__section">
			<h2 className="testimonials">Testimonials</h2>
			<div className="container">
				<TestimonialCard
					rating={5}
					photo={profilePicture}
					name="John"
					review="Awesome food!"
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture2}
					name="Annie"
					review="Greek salad was a fresh and cool"
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture3}
					name="Victoria"
					review="Bruschetta was tastefull and light"
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture4}
					name="Peter"
					review="Great food and great space"
				></TestimonialCard>
			</div>
		</section>
	);
}
