import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Footer() {
	return (
		<footer>
			<ul>
				<li>
					<img src={logo} alt="Logo" />
				</li>
				<li>
					<h6>
						{" "}
						Doormat Navigation
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
					</h6>
				</li>
				<li>
					<h6>
						{" "}
						Contact
						<ul>
							<li>Adress</li>
							<li>Phone Number</li>
							<li>email</li>
						</ul>
					</h6>
				</li>
				<li>
					{" "}
					<h6>
						{" "}
						Social media links
						<ul>
							<li>
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>{" "}
							</li>
							<li>
								<a
									href="https://www.tweeter.com"
									target="_blank"
									rel="noreferrer"
								>
									Tweeter
								</a>{" "}
							</li>
						</ul>
					</h6>
				</li>
			</ul>
		</footer>
	);
}
