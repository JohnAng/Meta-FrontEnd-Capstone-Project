import React from "react";
import Hero from "./Hero/Hero";
import About from "./Info/Info";
import Promo from "./Weeks Specials/Promo";
import Testimonials from "./Testimonials/Testimonials";

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
