/**
 * Tests Login Form Component
 *
 * @group unit
 */

// Testing Libs
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

// Component to test
import LoginForm from "../index";

describe("Login Form", () => {
	/** Snapshots  */
	// it("renders without crashing & matches snapshot", () => {
	//   const { asFragment } = render(<InputField />);
	//   expect(asFragment()).toMatchSnapshot();
	//   const inputField = screen.getByRole("textbox");
	//   expect(inputField).toBeInTheDocument()
	// })

	it("inputs exists by label text", () => {
		render(<LoginForm />);
		const userInput = screen.getByLabelText("usuario");
		const passInput = screen.getByLabelText("contraseña");
		expect(userInput).toBeInTheDocument();
		expect(passInput).toBeInTheDocument();
	});

	it("the placeholder of elements its correct", () => {
		render(<LoginForm />);
		const userInput = screen.getByPlaceholderText("myuser35");
		const passInput = screen.getByPlaceholderText("********");
		expect(userInput).toBeInTheDocument();
		expect(passInput).toBeInTheDocument();
	});

	it("user input can't be only numbers. show error and helper text", () => {
		const demoUser = "455";
		const demoPass = "Pass1234$";
		render(<LoginForm onSubmit={() => {}} />);
		const userInput = screen.getByLabelText("usuario");
		const passInput = screen.getByLabelText("contraseña");
		const submitButton = screen.getByText("ingresar");

		userEvent.type(userInput, demoUser);
		userEvent.type(passInput, demoPass);
		userEvent.click(submitButton);

		const userHelperText = screen.getByText("usuario incorrecto");
		const errorIcon = screen.getByTestId("error-icon");

		expect(userHelperText).toBeInTheDocument();
		expect(errorIcon).toBeInTheDocument();
	});

	it("user and pass input length min, and regular expressions", () => {
		const demoUserWrong = "bad";
		const demoPassWrong = "123";
		const demoUserOk = "good_user";
		const demoPassOk = "G00dP4ssw#rd";

		render(<LoginForm onSubmit={() => {}} />);
		const userInput = screen.getByLabelText("usuario");
		const passInput = screen.getByLabelText("contraseña");
		const submitButton = screen.getByText("ingresar");

		userEvent.type(userInput, demoUserWrong);
		userEvent.type(passInput, demoPassWrong);
		userEvent.click(submitButton);

		// wrong credentials
		const userHelperText = screen.getByText("usuario incorrecto");
		const passHelperText = screen.getByText("contraseña incorrecta");
		const errorIcons = screen.getAllByTestId("error-icon");
		expect(userHelperText).toBeInTheDocument();
		expect(passHelperText).toBeInTheDocument();
		expect(errorIcons[0]).toBeInTheDocument();
		expect(errorIcons[1]).toBeInTheDocument();
		// correcting credentials
		userEvent.type(userInput, demoUserOk);
		userEvent.type(passInput, demoPassOk);
		userEvent.click(submitButton);
		expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
	});

	it("correctly errors messages", () => {
		const demoUser = "bad";
		const demoPass = "123";
		render(<LoginForm onSubmit={() => {}} />);
		const userInput = screen.getByLabelText("usuario");
		const passInput = screen.getByLabelText("contraseña");
		const submitButton = screen.getByText("ingresar");

		userEvent.type(userInput, demoUser);
		userEvent.type(passInput, demoPass);
		userEvent.click(submitButton);

		const userHelperText = screen.getByText("usuario incorrecto");
		const passHelperText = screen.getByText("contraseña incorrecta");
		const errorIcons = screen.getAllByTestId("error-icon");

		expect(userHelperText).toBeInTheDocument();
		expect(passHelperText).toBeInTheDocument();
		expect(errorIcons[0]).toBeInTheDocument();
		expect(errorIcons[1]).toBeInTheDocument();
	});

	it("forgot my pass, redirect to", () => {
		/**
		 *
		 */
	});
});
