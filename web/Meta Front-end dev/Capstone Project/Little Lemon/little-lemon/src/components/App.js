import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import "../styles/info.css";
import "../styles/footer.css";
import "../styles/hero.css";
import "../styles/mobile-nav.css";
import "../styles/modern-normalize.css";
import "../styles/nav.css";
import "../styles/promo.css";
import "../styles/style.css";
import "../styles/testimonials.css";
import "../styles/utils.css";
import Footer from "./Footer";
import Header from "./Header";
import About from "./Route/About"
import Login from "./Route/Login";
import Home from "./Route/Home";
import Menu from "./Route/Menu";
import OrderOnline from "./Route/OrderOnline";
import Reservation from "./Route/Reservation";

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
			<Footer></Footer>
		</>
	);
}

export default App;
