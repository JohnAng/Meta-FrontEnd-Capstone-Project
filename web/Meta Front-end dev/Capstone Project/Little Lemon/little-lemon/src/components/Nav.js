import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/About">ABOUT</Link>
				</li>
				<li>
					<Link to="/Menu">MENU</Link>
				</li>
				<li>
					<Link to="/Reservation">RESERVATION</Link>
				</li>
				<li>
					<Link to="/OnlineOrder">ONLINE ORDER</Link>
				</li>
				<li>
					<Link to="/Login">LOGIN</Link>
				</li>
			</ul>
		</nav>
	);
}
