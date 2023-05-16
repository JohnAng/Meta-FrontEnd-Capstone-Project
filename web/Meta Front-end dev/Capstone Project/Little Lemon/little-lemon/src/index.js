import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components//Login";
import Menu from "./components//Menu";
import OrderOnline from "./components//OrderOnline";
import Reservation from "./components//Reservation";
import About from "./components/About";
import App from "./components/App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/About" element={<About />} />
				<Route path="/Menu" element={<Menu />} />
				<Route path="/Reservation" element={<Reservation />} />
				<Route path="/OrderOnline" element={<OrderOnline />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
