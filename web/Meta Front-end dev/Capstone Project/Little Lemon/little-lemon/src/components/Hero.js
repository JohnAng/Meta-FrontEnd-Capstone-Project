import React from "react";
import heroImg from "../images/14.jpg";

export default function Hero() {
	return (
		<section className="hero__section">
			<div className="container">
				<div className="hero-description">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p className="hero-p">
						We are a family owned Mediterranean restaurant, focused
						on traditional recipes served with a modern twist.
					</p>
					<button className="btn">Reserve a table</button>
				</div>
				<img src={heroImg} alt="serving food" className="hero__image" />
			</div>
		</section>
	);
}
