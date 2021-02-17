import { FC } from "react";
import {
	CheckCircleFilled,
	ExclamationCircleOutlined
} from "@ant-design/icons";
import { IInputField } from "./types";
import "./styles.less";

const InputField: FC<IInputField> = ({
	error,
	success,
	disabled,
	rows,
	name,
	size = "md",
	fullWidth,
	endIcon,
	startIcon,
	id,
	label,
	placeholder,
	helperText,
	type,
	onChange,
	noBorder,
	value,
	defaultValue
}) => {
	const className = `${error ? "error " : " "}
										${success ? "success " : " "}
										${size === "sm" ? "sm " : ""}
										${size === "md" ? "md " : " "}
										${noBorder ? "no-border " : " "}
										${fullWidth ? "fullwidth " : " "}
										${disabled ? "disabled " : " "}
	`;

	return (
		<div className={`input ${className}`}>
			<label className={`input__label ${className}`}>{label}</label>
			<div className="input__container">
				{startIcon ? () => startIcon : null}
				<input
					aria-label={label}
					name={name}
					className={`input__field ${className}`}
					placeholder={placeholder ?? ""}
					value={value}
					onChange={onChange}
					disabled={disabled}
					type={type}
					defaultValue={defaultValue}
				/>
				{endIcon ? () => endIcon : null}
				{error && (
					<ExclamationCircleOutlined
						data-testid="error-icon"
						className="error-icon"
					/>
				)}
				{success && (
					<CheckCircleFilled
						data-testid="success-icon"
						className="success-icon"
					/>
				)}
			</div>
			<span className={`input__helper-text ${className}`}>{helperText}</span>
		</div>
	);
};

export default InputField;
