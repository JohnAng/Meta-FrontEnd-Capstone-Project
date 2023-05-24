import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "../components/Reservation/BookingForm";

test("Renders the BookingForm", () => {
	render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

	const dateLabelElement = screen.getByLabelText("Date");
	expect(dateLabelElement).toBeInTheDocument();

    const timeLabelElement = screen.getByLabelText("Time");
	expect(timeLabelElement).toBeInTheDocument();

    const guestsLabelElement = screen.getByLabelText("Guests");
	expect(guestsLabelElement).toBeInTheDocument();

    const ocassionLabelElement = screen.getByLabelText("Occasion");
	expect(ocassionLabelElement).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText("Name");
	expect(nameLabelElement).toBeInTheDocument();
});

