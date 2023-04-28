import React from "react";
import About from "./About";
import ItemCard from "./ItemCard";
import TestimonialCard from "./TestimonialCard";
import Hero from "./Hero";

export default function Main() {
	return (
		<main>
			<section>
				Hero
				<Hero></Hero>
			</section>
			<section>
				This Weeks Specials!
				<ItemCard photo="" dish="" price="" description="">
					card1
				</ItemCard>
				<ItemCard photo="" dish="" price="" description="">
					card2
				</ItemCard>
				<ItemCard photo="" dish="" price="" description="">
					card3
				</ItemCard>
			</section>
			<section>
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
			</section>
		</main>
	);
}
