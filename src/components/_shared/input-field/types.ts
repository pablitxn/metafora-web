import { ReactNode } from "react";

export interface IInputField {
	error?: boolean;
	success?: boolean;
	disabled?: boolean;
	name?: string;
	rows?: number;
	size?: "sm" | "md";
	fullWidth?: boolean;
	endIcon?: ReactNode;
	startIcon?: ReactNode;
	id?: string;
	label: string;
	placeholder?: string;
	helperText?: string;
	type?: "text" | "text-area" | "number" | "password";
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	noBorder?: boolean;
	value?: string | number;
	defaultValue?: string;
}
