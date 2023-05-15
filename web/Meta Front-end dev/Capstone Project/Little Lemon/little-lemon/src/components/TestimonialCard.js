import React from "react";
import Star from "../images/star.png";

export default function TestimonialCard(props) {
	const renderStars = () => {
		const stars = [];
		for (let star = 0; star < props.rating; star++) {
			stars.push(<img src={Star} alt="Star Rating" />);
		}
		return stars;
	};
	return (
		<article className="testimonial__cards">
			<div className="rating">{renderStars()}</div>
			<div className="profile-picture container">
				<img src={props.photo} alt="profile" />
				<p>{props.name}</p>
			</div>
			<p className="Review">{props.review}</p>
		</article>
	);
}
