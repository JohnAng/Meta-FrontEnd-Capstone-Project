import React from "react";
import logo from "../images/logo.jpg";
import Nav from "./Nav";

export default function Header() {
	return (
		<header>
			<img src={logo} alt="Logo" />
			<Nav></Nav>
		</header>
	);
}
