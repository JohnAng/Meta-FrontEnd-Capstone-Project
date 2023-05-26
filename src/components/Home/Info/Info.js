import React from "react";
import infoimgA from "../../../images/Mario and Adrian A.jpg";
import infoimgB from "../../../images/Mario and Adrian b.jpg";

export default function Info() {
	return (
		<section className="info__section">
			<div className="container">
				<article className="container info">
					<h2 className="info"> Little Lemon</h2>
					<h3 className="info"> Chicago</h3>
					<p className="info">
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
				<div className="container info">
					<img src={infoimgA} alt="adrian" className="info" />
					<img src={infoimgB} alt="pedro" className="info" />
				</div>
			</div>
		</section>
	);
}
