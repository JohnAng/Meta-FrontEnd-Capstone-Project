import React from "react";
import Hero from "./Hero";
import Promo from "./Promo";
import Testimonials from "./Testimonials";

export default function Main() {
	return (
		<main>
			<Hero></Hero>
			<Promo></Promo>
			<Testimonials></Testimonials>
			{/* <section>
				Testimonials
				<TestimonialCard rating="" photo="" name="" review="">
					card1
				</TestimonialCard>
				<TestimonialCard rating="" photo="" name="" review="">
					card2
				</TestimonialCard>
				<TestimonialCard rating="" photo="" name="" review="">
					card3
				</TestimonialCard>
				<TestimonialCard rating="" photo="" name="" review="">
					card4
				</TestimonialCard>
			</section>
			<section>
				About
				<About></About>
			</section> */}
		</main>
	);
}
