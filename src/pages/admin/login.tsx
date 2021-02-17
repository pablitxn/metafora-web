import { FC } from "react";
import LoginForm from "../../components/admin/login-form";
import "./styles.less";

const Login: FC<any> = ({ onSubmit }) => {
	// const onSubmit = (user: any) => {
	// 	console.log(user);
	// };

	return (
		<div className="login">
			<div className="login__form-container">
				<header>
					<h1 className="login__title">bievenidx a metafora</h1>
					<small className="login__subtitle">
						texto de relleno desde 1810
					</small>{" "}
					<br />
				</header>

				<div className="divider" />

				<main>
					<LoginForm onSubmit={onSubmit} />
				</main>
			</div>
		</div>
	);
};

export default Login;
