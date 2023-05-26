import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/Reservation/BookingForm";

test("Renders the BookingForm", () => {
	render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

	expect(screen.getByLabelText("Date")).toBeInTheDocument();
	expect(screen.getByLabelText("Time")).toBeInTheDocument();
	expect(screen.getByLabelText("Guests")).toBeInTheDocument();
	expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
	expect(screen.getByLabelText("Name*")).toBeInTheDocument();
	expect(screen.getByText("Reserve a table")).toBeInTheDocument();
});

test("submits the form when valid data is provided", () => {
	const mockSubmitForm = jest.fn();
	render(
		<BookingForm
			availableTimes={[]}
			updateTimes={() => {}}
			submitForm={mockSubmitForm}
		/>
	);

	// Fill in the form fields with valid data
	fireEvent.change(screen.getByLabelText("Date"), {
		target: { value: "2023-06-01" },
	});
	fireEvent.change(screen.getByLabelText("Time"), {
		target: { value: "18:00" },
	});
	fireEvent.change(screen.getByLabelText("Guests"), {
		target: { value: "2" },
	});
	fireEvent.change(screen.getByLabelText("Occasion"), {
		target: { value: "Birthday" },
	});
	fireEvent.change(screen.getByLabelText("Name*"), {
		target: { value: "John Doe" },
	});

	// Submit the form
	fireEvent.click(screen.getByText("Reserve a table"));

	// Assert that the form was submitted with the correct data
	expect(mockSubmitForm).toHaveBeenCalledWith({
		date: "2023-06-01",
		time: "",
		guests: "2",
		occasion: "Birthday",
		name: "John Doe",
	});
});

test("updates the available times when the date is changed", () => {
	const mockUpdateTimes = jest.fn();
	render(
		<BookingForm
			availableTimes={[]}
			updateTimes={mockUpdateTimes}
			submitForm={() => {}}
		/>
	);

	// Change the date
	fireEvent.change(screen.getByLabelText("Date"), {
		target: { value: "2023-06-01" },
	});

	// Assert that the updateTimes function was called with the selected date
	expect(mockUpdateTimes).toHaveBeenCalledWith(new Date("2023-06-01"));
});

test("disables the submit button when the name is too short", () => {
	render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

	// Fill in the form fields with valid data except for the name (less than 3 characters)
	fireEvent.change(screen.getByLabelText("Date"), {
		target: { value: "06-01-2023" },
	});
	fireEvent.change(screen.getByLabelText("Time"), {
		target: { value: "18:00" },
	});
	fireEvent.change(screen.getByLabelText("Guests"), {
		target: { value: "2" },
	});
	fireEvent.change(screen.getByLabelText("Occasion"), {
		target: { value: "Birthday" },
	});
	fireEvent.change(screen.getByLabelText("Name*"), {
		target: { value: "Jo" },
	});

	// Assert that the submit button is disabled
	expect(screen.getByText("Reserve a table")).toBeDisabled();
});

