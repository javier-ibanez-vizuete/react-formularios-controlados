import { useState } from "react";
import "./RegisterUserForm.css";

const INITIAL_FORM_STATES = {
	userName: "",
	id: "",
	name: "",
	password: "",
	email: "",
	passwordVerification: "",
};

export const RegisterUserForm = ({ users, setCurrentUsers }) => {
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState("");
	const [form, setForm] = useState(INITIAL_FORM_STATES);
	const { name, email, password, passwordVerification } = form;

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setVerified(false);
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));

		console.log("Cambiando inputs");
	};

	const onButtonClick = () => {
		const { name, email, password, passwordVerification } = form;

		if (!name) return setError("Introduce un nombre");
		if (!email) return setError("Introduce un correo electronico");
		if (!email.includes("@")) return setError("Email no valido '@'");
		if (email.length < 2) return setError("Email no valido");
		if (!password) return setError("Introduce una contraseña");
		if (!passwordVerification) return setError("Vuelva a introducir la contraseña");
		if (password !== passwordVerification) {
			setError("Las contraseñas introducidas no coinciden");
			setForm((prev) => ({ ...prev, passwordVerification: "", password: "" }));
			return;
		}
		if (users.some((user) => user.email === email)) return setError("El email introducido ya existe");
		const newId = Date.now();
		const newUserName = name + newId.toString().slice(0, 3);
		const newUser = { ...form, id: newId, userName: newUserName };
		setCurrentUsers((prev) => [...prev, newUser]);
		setForm(INITIAL_FORM_STATES);
		setVerified((prev) => !prev);
		console.log("Haciendo click en el boton");
	};

	return (
		<div className="register-user-form exercise-container">
			<h2>Formulario de registro</h2>
			<div>
				<div className="input-container">
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						placeholder="Introduce tu nombre Completo"
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="email">Correo electrónico</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						placeholder="Introduce un correo electrónico"
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						placeholder="Introduce una contraseña"
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="passwordVerification">Vuelva a introducir la contraseña</label>
					<input
						type="password"
						name="passwordVerification"
						id="passwordVerification"
						value={passwordVerification}
						placeholder="Introduzca de nuevo la contraseña"
						onChange={handleInputChange}
					/>
				</div>
				<button onClick={onButtonClick}>Registrarse</button>
				{error && <h4 className="error">{error}</h4>}
				{verified && <h4 className="aproved">Usuario Registrado Correctamente.</h4>}
			</div>
		</div>
	);
};
