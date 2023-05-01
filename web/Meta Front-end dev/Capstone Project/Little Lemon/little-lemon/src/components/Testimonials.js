import React from "react";
import TestimonialCard from "./TestimonialCard";
import profilePicture from "../images/testim1.png"
import profilePicture2 from "../images/testim2.png";
import profilePicture3 from "../images/testim3.png";
import profilePicture4 from "../images/testim4.png";

export default function Testimonials() {
	return (
		<section className="testimonial__section">
			<h2 className="testimonials">Testimonials</h2>
			<div className="container">
				<TestimonialCard
					rating={5}
					photo={profilePicture}
					name="John"
					review=""
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture2}
					name="Annie"
					review=""
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture3}
					name="Victoria"
					review=""
				></TestimonialCard>
				<TestimonialCard
					rating={5}
					photo={profilePicture4}
					name="Peter"
					review=""
				></TestimonialCard>
			</div>
		</section>
	);
}
