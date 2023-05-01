import React from "react";
import Star from "../images/star.png";

export default function TestimonialCard(props) {
	return (
		<article className="testimonial__cards">
			<div className="rating">
				<img src={Star} alt="" />
				<h3>{props.rating}/5</h3>
			</div>
			<div className="profile-picture">
				<img src={props.photo} alt="profile" />
				<p>{props.name}</p>
			</div>
			<p>{props.review}</p>
		</article>
	);
}
