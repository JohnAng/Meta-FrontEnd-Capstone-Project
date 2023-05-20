import React from "react";
import Hero from "./Hero";
import About from "./Info";
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
