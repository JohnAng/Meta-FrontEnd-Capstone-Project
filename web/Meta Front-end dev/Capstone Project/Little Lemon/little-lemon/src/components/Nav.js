import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Nav() {
	return (
		<nav className="navbar">
			<div className="logo">
				<Link style={{ textDecoration: "none" }} to="/">
					<img src={logo} alt="Logo" className="navbar-logo" />
				</Link>
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/About">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/Menu">
						Menu
					</Link>
				</li>
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/Reservation">
						Reservation
					</Link>
				</li>
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/OrderOnline">
						Order Online
					</Link>
				</li>
				<li className="nav-item">
					<Link style={{ textDecoration: "none" }} to="/Login">
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
}
