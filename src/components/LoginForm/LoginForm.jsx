import "./LoginForm.css";
import { users } from "../../utils/users/users.js";
import { useState } from "react";

const LOGIN_USER = {
	userName: "",
	password: "",
};

export const LoginForm = ({users}) => {
	const [currentUser, setCurrentUser] = useState(LOGIN_USER);
	const [error, setError] = useState("");
	const [isUser, setIsUser] = useState(false);
	const { userName, password } = currentUser;

	const handleInputChange = ({ target: { name, value } }) => {
		setError("");
		setIsUser(false);
		setCurrentUser((prev) => ({ ...prev, [name]: value.trim() }));
	};

	const handleLoginClick = () => {
		const { userName, password } = currentUser;
		if (!userName) {
			setTimeout(() => {
				setError("");
			}, 2000);
			return setError("Debes introducir un Usuario");
		}
		if (!password) {
			setTimeout(() => {
				setError("");
			}, 2000);
			return setError("Debes introducr una contraseña");
		}

		const isValidUser = users.some((user) => {
			const validUser = userName === user.userName;
			const validPassword = password === user.password;
			return validUser && validPassword;
		});

		if (!isValidUser) {
			setTimeout(() => {
				setError("");
			}, 3000);
			setError("Usuario y/o contraseña incorrecta.");
			return setCurrentUser(LOGIN_USER);
		}
		setIsUser((prev) => !prev);
		return;
	};

	return (
		<div className="login-form exercise-container">
			<h2>Formulario Login</h2>
			<div className="general-form-container">
				<div className="input-login-container">
					<label htmlFor="userName">Usuario</label>
					<input
						type="text"
						name="userName"
						id="userName"
						value={userName}
						onChange={handleInputChange}
						placeholder="Introduce tu nombre de usuario"
					/>
				</div>
				<div className="input-login-container">
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={handleInputChange}
						placeholder="Introduce tu contraseña"
					/>
				</div>
				<button onClick={handleLoginClick}>ACCEDER</button>
				{error && <h4 className="error">{error}</h4>}
				{isUser && <h4 className="aproved">BIENVENIDO</h4>}
			</div>
		</div>
	);
};
