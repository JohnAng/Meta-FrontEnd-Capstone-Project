import React from "react";

export default function ItemCard(props) {
	return (
		<article className="card">
			<img src={props.photo} alt="" />
			<div className="container card-container">
				<h3>{props.dish}</h3>
				<span>{props.price}</span>
			</div>
			<p>{props.description}</p>
			<p className="orderNow">Order Now {"->"}</p>
		</article>
	);
}
