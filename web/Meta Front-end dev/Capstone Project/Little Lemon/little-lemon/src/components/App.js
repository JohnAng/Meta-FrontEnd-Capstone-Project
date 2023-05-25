import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/utils.css";
import "./App.css";
import "./Home/Hero/hero.css";
import "./Home/Info/info.css";
import "./Home/Testimonials/testimonials.css";
import "./Home/Weeks Specials/promo.css";
import "./Reservation/reservation.css";
import About from "./Route/About";
import Home from "./Route/Home";
import Login from "./Route/Login";
import Menu from "./Route/Menu";
import OrderOnline from "./Route/OrderOnline";
import Reservation from "./Route/Reservation";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./layout/footer.css";
import "./layout/mobile-nav.css";
import "./layout/nav.css";
import { fetchAPI } from "../API/api";

function App() {
	const initializeTimes = () => {
		const today = new Date();
		const availableTimes = fetchAPI(today);
		return availableTimes.map((time) => ({ time, available: true }));
	};

	const availableTimesReducer = (state, action) => {
		switch (action.type) {
			case "INITIALIZE_TIMES":
				return initializeTimes();
			case "UPDATE_TIMES":
				return action.availableTimes.map((time) => ({
					time,
					available: true,
				}));
			default:
				return state;
		}
	};

	const [availableTimes, dispatch] = useReducer(
		availableTimesReducer,
		[],
		initializeTimes
	);

	const updateTimes = (date) => {
		const selectedDate = new Date(date);
		const availableTimes = fetchAPI(selectedDate);
		dispatch({ type: "UPDATE_TIMES", availableTimes });
	};

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Menu" element={<Menu />} />
				<Route
					path="/Reservation"
					element={
						<Reservation
							availableTimes={availableTimes}
							updateTimes={updateTimes}
						/>
					}
				/>
				<Route path="/OrderOnline" element={<OrderOnline />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
