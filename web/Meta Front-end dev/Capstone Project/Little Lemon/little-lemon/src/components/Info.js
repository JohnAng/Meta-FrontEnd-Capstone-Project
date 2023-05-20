import React from "react";
import aboutimgA from "../images/Mario and Adrian A.jpg";
import aboutimgB from "../images/Mario and Adrian b.jpg";

export default function Info() {
	return (
		<section className="container about">
			<article className="container about">
				<h2 className="about"> Little Lemon</h2>
				<h3 className="about"> Chicago</h3>
				<p className="about">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum
				</p>
			</article>
			<div className="container about">
				<img src={aboutimgA} alt="adrian" className="about" />
				<img src={aboutimgB} alt="pedro" className="about" />
			</div>
		</section>
	);
}
