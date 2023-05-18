import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header className="header container">
				<NavLink to="/">
					<img src={logo} alt="Logo" className="header__logo" />
				</NavLink>

				<nav
					className={`header__nav ${isMobileMenuOpen ? "open" : ""}`}
				>
					<ul className="header__menu">
						<li>
							<NavLink className="header__link" to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className="header__link" to="/About">
								About
							</NavLink>
						</li>
						<li>
							<NavLink className="header__link" to="/Menu">
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink className="header__link" to="/Reservation">
								Reservation
							</NavLink>
						</li>
						<li>
							<NavLink className="header__link" to="/OrderOnline">
								Order Online
							</NavLink>
						</li>
						<li>
							<NavLink className="header__link" to="/Login">
								Login
							</NavLink>
						</li>
					</ul>
				</nav>

				<button
					aria-label="mobile nav button"
					className={`header__bars ${isMobileMenuOpen ? "open" : ""}`}
					onClick={handleMobileMenuToggle}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</header>

			{isMobileMenuOpen && (
				<div className="mobile-nav open">
					<nav>
						<ul className="mobile-header__menu">
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/"
									onClick={handleMobileMenuToggle}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/About"
									onClick={handleMobileMenuToggle}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/Menu"
									onClick={handleMobileMenuToggle}
								>
									Menu
								</NavLink>
							</li>
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/Reservation"
									onClick={handleMobileMenuToggle}
								>
									Reservation
								</NavLink>
							</li>
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/OrderOnline"
									onClick={handleMobileMenuToggle}
								>
									Order Online
								</NavLink>
							</li>
							<li>
								<NavLink
									className="mobile-nav__link"
									to="/Login"
									onClick={handleMobileMenuToggle}
								>
									Login
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			)}

			<div className="headerLine"></div>
		</>
	);
}
