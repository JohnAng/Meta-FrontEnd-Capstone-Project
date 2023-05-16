import React from "react";
import Bruschetta from "../images/10.jpg";
import Salad from "../images/5.jpg";
import LemonDesert from "../images/lemon dessert.jpg";
import ItemCard from "./ItemCard";

import { NavLink } from "react-router-dom";

export default function Promo() {
	return (
		<section className="promo__section">
			<div className="container main">
				<h2 className="promo">This weeks specials!</h2>
				<NavLink to="/OrderOnline">
					<button className="promo btn">order online</button>
				</NavLink>
				<div className="container ">
					<ItemCard
						photo={Salad}
						dish="Greek Salad"
						price="$12.99"
						description="The famous Greek salad of
									crispy lettuce, peppers, olives
									and our Chicago style feta
									cheese, garnished with
									crunchy garlic and rosemary
									croutons."
					></ItemCard>
					<ItemCard
						photo={Bruschetta}
						dish="Bruschetta"
						price="$5.00"
						description="Our bruschetta is made from
grilled bread that has been
smeared with garlic and
seasoned with salt and olive
oil."
					></ItemCard>
					<ItemCard
						photo={LemonDesert}
						dish="Lemon Desert"
						price="$5.00"
						description="This comes straight from
grandma’s recipe book, every
last ingredient has been
sourced and as authentic
as can be imagined"
					>
						card3
					</ItemCard>
				</div>
			</div>
		</section>
	);
}
