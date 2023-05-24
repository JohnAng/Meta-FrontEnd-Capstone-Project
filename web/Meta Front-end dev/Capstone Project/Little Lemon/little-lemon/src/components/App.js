import React, { useReducer } from "react";
import { Route, Routes, Router } from "react-router-dom";
import "./App.css"
import "./layout/footer.css"
import "./Home/Hero/hero.css"
import "./Home/Info/info.css"
import "./layout/mobile-nav.css"
import "../styles/modern-normalize.css";
import "./layout/nav.css";
import "./Home/Weeks Specials/promo.css"
import "./Reservation/reservation.css"
import "../styles/style.css";
import "./Home/Testimonials/testimonials.css"
import "../styles/utils.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./Route/About";
import Home from "./Route/Home";
import Login from "./Route/Login";
import Menu from "./Route/Menu";
import OrderOnline from "./Route/OrderOnline";
import Reservation from "./Route/Reservation";

const initialAvailableTimes = [
	{ time: "17:00", available: true },
	{ time: "18:00", available: true },
	{ time: "19:00", available: true },
	{ time: "20:00", available: true },
	{ time: "21:00", available: true },
	{ time: "22:00", available: true },
];

const initializeTimes = () => {
	// Generate the initial state for availableTimes
	// For now, return the same initial available times
	return initialAvailableTimes;
};

const availableTimesReducer = (state, action) => {
	switch (action.type) {
		case "INITIALIZE_TIMES":
			return initializeTimes();
		case "UPDATE_TIMES":
			// Update the available times based on the selected date
			// For now, return the same available times regardless of the date
			return [...state];
		default:
			return state;
	}
};

function App() {
	const [availableTimes, dispatch] = useReducer(
		availableTimesReducer,
		[],
		initializeTimes
	);

	const updateTimes = (selectedDate) => {
		// Dispatch an action to update the available times based on the selected date
		dispatch({ type: "UPDATE_TIMES", selectedDate });
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
