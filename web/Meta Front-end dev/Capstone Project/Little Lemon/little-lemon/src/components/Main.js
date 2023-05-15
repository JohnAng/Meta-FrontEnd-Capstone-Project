import React from "react";
import About from "./About";
import Hero from "./Hero";
import Promo from "./Promo";
import Testimonials from "./Testimonials";

export default function Main() {
	return (
		<main>
			<Hero></Hero>
			<Promo></Promo>
			<Testimonials></Testimonials>
			<About></About>
		</main>
	);
}
