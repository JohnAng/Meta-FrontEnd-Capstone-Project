import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import "../styles/about.css";
import "../styles/hero.css";
import "../styles/mobile-nav.css";
import "../styles/modern-normalize.css";
import "../styles/nav.css";
import "../styles/promo.css";
import "../styles/style.css";
import "../styles/testimonials.css";
import "../styles/utils.css";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Reservation from "./Reservation";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Menu" element={<Menu />} />
				<Route path="/Reservation" element={<Reservation />} />
				<Route path="/OrderOnline" element={<OrderOnline />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			{/* <Footer></Footer> */}
		</>
	);
}

export default App;
