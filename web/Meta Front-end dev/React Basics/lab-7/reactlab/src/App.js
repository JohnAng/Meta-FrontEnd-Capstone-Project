import { Link, Route, Routes } from "react-router-dom";
import AboutLittleLemon from "./AboutLittleLemon";
import "./App.css";
import Contact from "./Contact";
import Homepage from "./Homepage";

function App() {
	return (
		<div>
			<nav>
				<Link to="/" className="nav-item">
					Homepage
				</Link>
				<Link to="/about" className="nav-item">
					About Little Lemon
				</Link>
				<Link to="/contact" className="nav-item">
					Contact Us
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/about" element={<AboutLittleLemon />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</div>
	);
}

export default App;
