import { FC } from "react";
import Input from "../../_shared/input-field";
import { useLoginForm } from "../../../hooks/useLoginForm";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.less";

interface ILoginForm {
	onSubmit: (user: any) => void;
}

const LoginForm: FC<ILoginForm> = ({ onSubmit }) => {
	const { user, password, handleChange, handleSubmit, loading } = useLoginForm(
		onSubmit
	);

	return (
		<div className="form-container">
			<h1>Ingresá</h1>
			<form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
				<div className="login-form__item">
					<Input
						onChange={handleChange}
						name="user"
						placeholder="myuser35"
						value={user.value}
						error={user.error}
						helperText={user.helperText}
						label="usuario"
						type="text"
						fullWidth
					/>
				</div>
				<div className="login-form__item">
					<Input
						onChange={handleChange}
						name="password"
						value={password.value}
						error={password.error}
						helperText={password.helperText}
						placeholder="********"
						label="contraseña"
						type="password"
						fullWidth
					/>
				</div>
				<button type="submit" className="login-form__action--submit">
					{loading && <LoadingOutlined data-testid="loading-icon" />}
					{!loading && "ingresar"}
				</button>
			</form>
			<a href="asd" className="login-form__action--transparent">
				olvidaste tu contraseña?
			</a>
		</div>
	);
};

export default LoginForm;
