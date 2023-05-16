import React from "react";
import Star from "../images/star.png";

export default function TestimonialCard(props) {
	const renderStars = () => {
		const stars = [];
		for (let star = 0; star < props.rating; star++) {
			const starId = `${props.name} and ${props.rating} and ${star}`;
			stars.push(<img src={Star} key={starId} alt="Star Rating" />);
		}
		return stars;
	};
	return (
		<article className="testimonial__cards">
			<div className="profile-picture container">
				<img src={props.photo} alt="profile" />
				<p>{props.name}</p>
			</div>
			<div className="rating">{renderStars()}</div>
			<p className="Review">{props.review}</p>
		</article>
	);
}
