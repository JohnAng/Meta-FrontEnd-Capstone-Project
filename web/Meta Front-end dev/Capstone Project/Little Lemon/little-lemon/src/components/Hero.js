import React from "react";
import heroImg from "../images/14.jpg";

export default function Hero() {
	return (
		<section className="hero-container">
			<div className="hero-container">
				<div className="hero-description">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused
						on traditional recipes served with a modern twist.
					</p>
					<button>Reserve a table</button>
				</div>
				<div className="hero-image">
					<img src={heroImg} alt="Brushcetta" />
				</div>
			</div>
		</section>
	);
}
