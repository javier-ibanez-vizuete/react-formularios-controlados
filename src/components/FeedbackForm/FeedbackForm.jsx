import { useState } from "react";
import "./FeedbackForm.css";

const INITIAL_FORM_STATE = {
	userName: "",
	userMessage: "",
};

export const FeedbackForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState("");
	const { userName, userMessage } = form;

	const handleInputChange = ({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value.trim() }));

	const handleFormClick = () => {
		if (!userName) return setError("Debes rellenar el campo 'Nombre'");
		if (!userMessage) return setError("Debes rellenar el campo 'Añade un comentario'");
		if (verified) {
			setForm(INITIAL_FORM_STATE);
			setError("");
		}
		setVerified((prev) => !prev);
	};

	return (
		<div className="feedback-form exercise-container">
			<h2>Verificacion de campos de formulario</h2>
			{!verified && (
				<div>
					<label htmlFor="userName">Nombre</label>
					<input
						type="text"
						name="userName"
						id="userName"
						value={userName}
						onChange={handleInputChange}
						placeholder="Introduce un nombre"
					/>
					<label htmlFor="userMessage">Añade un comentario</label>
					<textarea
						name="userMessage"
						id="userMessage"
						value={userMessage}
						onChange={handleInputChange}
						placeholder="Introduce un mensaje adicional"
					/>
					<button onClick={handleFormClick}>Enviar</button>
					{error && <h4 className="error">{error}</h4>}
				</div>
			)}
			{verified && (
				<div>
					<h4>Verifica los datos introducidos antes de continuar</h4>
					<h5>
						Nombre: <span>{userName}</span>
					</h5>
					<h5>Mensaje Adicional:</h5>
					<p>{userMessage}</p>
					<button onClick={handleFormClick}>Aceptar</button>
				</div>
			)}
		</div>
	);
};
