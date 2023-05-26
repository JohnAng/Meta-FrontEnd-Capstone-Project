import "@testing-library/jest-dom/extend-expect";
import { render, renderHook } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { useReducer } from "react";


const initialAvailableTimes = [
	{ time: "17:00", available: true },
	{ time: "18:00", available: true },
	{ time: "19:00", available: true },
	{ time: "20:00", available: true },
	{ time: "21:00", available: true },
	{ time: "22:00", available: true },
];

test("initializeTimes function", () => {
	const initializeTimes = jest.fn().mockReturnValue(initialAvailableTimes);

	render(
		<BrowserRouter>
			<App initializeTimes={initializeTimes} />
		</BrowserRouter>
	);

	expect(initializeTimes()).toEqual(initialAvailableTimes);
});


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

const testUpdateTimes = () => {
	const { result } = renderHook(() =>
		useReducer(availableTimesReducer, [], initializeTimes)
	);
	const [, dispatch] = result.current;

	act(() => {
		dispatch({ type: "UPDATE_TIMES", selectedDate: "2023-05-25" });
	});

	expect(result.current[0]).toEqual(initialAvailableTimes);
};

test(
	"updateTimes returns the same value provided in the state",
	testUpdateTimes
);
