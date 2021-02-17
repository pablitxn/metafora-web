import { useState, ChangeEvent } from "react";
import { isValidUser, isValidPassword } from "../utils/regex";

const useLoginForm = (onSubmit: any) => {
	const [input, setInput] = useState({
		user: "",
		password: ""
	});

	const [error, setError] = useState({
		user: false,
		password: false
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setInput((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isValidUser(input.user) && isValidPassword(input.password)) {
			setError({ user: false, password: false });
			onSubmit(input);
			setLoading(true);
		}
		if (!isValidUser(input.user)) {
			setError((prev) => ({ ...prev, user: true }));
		}
		if (!isValidPassword(input.password)) {
			setError((prev) => ({ ...prev, password: true }));
		}
	};

	return {
		handleChange,
		handleSubmit,
		user: {
			value: input.user,
			error: error.user,
			helperText: error.user ? "usuario incorrecto" : undefined
		},
		password: {
			value: input.password,
			error: error.password,
			helperText: error.password ? "contraseña incorrecta" : undefined
		},
		loading
	};
};

export { useLoginForm };
