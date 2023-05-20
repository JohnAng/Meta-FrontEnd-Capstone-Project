import React from "react";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";

import Bruschetta from "../../../images/10.jpg";
import Salad from "../../../images/5.jpg";
import LemonDesert from "../../../images/lemon dessert.jpg";

const specials = [
	{
		photo: Salad,
		dish: "Greek Salad",
		price: "$12.99",
		description:
			"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		id: 1,
	},
	{
		photo: Bruschetta,
		dish: "Bruschetta",
		price: "$5.00",
		description:
			"Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		id: 2,
	},
	{
		photo: LemonDesert,
		dish: "Lemon Desert",
		price: "$5.00",
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
		id: 3,
	},
];

export default function Promo() {
	return (
		<section className="promo__section">
			<div className="container main">
				<h2 className="promo">This week's specials!</h2>
				<NavLink to="/OrderOnline">
					<button className="promo btn">order online</button>
				</NavLink>
				<div className="container">
					{specials.map((special) => (
						<ItemCard
							key={special.id}
							photo={special.photo}
							dish={special.dish}
							price={special.price}
							description={special.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
