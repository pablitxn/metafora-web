/**
 * Tests InputField Component
 *
 * @group unit
 */

// Testing Libs
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

// Component to test
import InputField from "../index";

describe("Input Field", () => {
	/** Snapshots  */
	// it("renders without crashing & matches snapshot", () => {
	//   const { asFragment } = render(<InputField />);
	//   expect(asFragment()).toMatchSnapshot();
	//   const inputField = screen.getByRole("textbox");
	//   expect(inputField).toBeInTheDocument()
	// })

	it("accepts an input and shows it", () => {
		render(<InputField />);
		const myText = "this is a demo text";
		const inputField = screen.getByRole("textbox");
		userEvent.type(inputField, myText);
		expect(inputField).toHaveValue(myText);
	});

	it("has an error state that shows an icon and helper text", () => {
		render(<InputField error label="label" helperText="helper text" />);
		const inputField = screen.getByRole("textbox");
		const inputFieldLabel = screen.getByLabelText("label");
		const inputFieldHelperText = screen.getByText("helper text");
		expect(inputField).toHaveClass("error");
		expect(inputFieldLabel).toHaveClass("error");
		expect(inputFieldHelperText).toHaveClass("error");
	});

	it("has an success state that shows an icon", () => {
		render(<InputField success label="title" helperText="helper text" />);
		const inputField = screen.getByRole("textbox");
		const inputFieldLabel = screen.getByLabelText("title");
		const inputFieldHelperText = screen.getByText("helper text");
		expect(inputField).toHaveClass("success");
		expect(inputField.nextSibling).toHaveClass("success-icon");
		expect(inputFieldLabel).toHaveClass("success");
		expect(inputFieldHelperText).toHaveClass("success");
	});

	it("has a disabled state", () => {
		render(<InputField disabled label="title" helperText="helper text" />);
		const inputField = screen.getByRole("textbox");
		const inputFieldTitle = screen.getByText("title");

		expect(inputField).toBeDisabled();
		expect(inputField).toHaveClass("disabled");
		expect(inputFieldTitle).toHaveClass("disabled");
	});

	it("has a noborder variant that adds custom class", () => {
		render(<InputField noBorder />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveClass("no-border");
	});

	it("renders as a medium size (default/explicit)", () => {
		render(
			<>
				<InputField label="input Field 1" />
				<InputField label="input Field 2" size="md" />
			</>,
		);
		const inputField1 = screen.getByText("input Field 1");
		const inputField2 = screen.getByText("input Field 2");
		expect(inputField1).toHaveClass("md");
		expect(inputField2).toHaveClass("md");
	});

	it("renders as fullwidth", () => {
		render(<InputField fullWidth />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveClass("fullwidth");
	});

	it("renders as small", () => {
		render(<InputField size="sm" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveClass("sm");
	});

	it("has a placeholder text visible", () => {
		const myText = "This is a placeholder text";
		render(<InputField placeholder={myText} />);
		const inputField = screen.getByPlaceholderText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("doesn't have a placeholder text visible", () => {
		render(<InputField />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.parentElement.parentElement.placeholder).toBe(undefined);
	});

	it("has a label visible", () => {
		const myText = "Demo label";
		render(<InputField label={myText} id="my-input-field" />);
		const inputField = screen.getByLabelText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("has a helper text visible", () => {
		const myText = "Demo Helper Text";
		render(
			<InputField
				helperText={myText}
				helperTextId="my-helper-text"
				id="my-input-field"
			/>,
		);
		const inputField = screen.getByText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("is an input of type Number", () => {
		render(<InputField type="number" />);
		const inputField = screen.getByRole("spinbutton");
		expect(inputField).toHaveProperty("type", "number");
	});

	it("is an input of type Text", () => {
		render(<InputField type="text" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveProperty("type", "text");
	});

	it("receives a defaultValue", () => {
		render(<InputField defaultValue="demo value" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveValue("demo value");
	});
});
