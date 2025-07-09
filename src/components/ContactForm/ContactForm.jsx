import { useState } from "react";
import "./ContactForm.css";

const INITIAL_FORM_STATE = {
	name: "",
	email: "",
	reason: "",
	message: "",
};

export const ContactForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState("");
	const [send, setSend] = useState(false);

	const handleInputChange = ({ target: { name, value } }) => {
		console.log(name);
		console.log(value);
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	const onFormSubmit = () => {
		setError("");
		if (!form.name) return setError("Debes rellenar el Campo Nombre");
		if (!form.email) return setError("Debes rellenar el Campo Email");
		if (!form.email.includes("@") || !form.email.includes("."))
			return setError("La direccion Email no es valida --> '@'");
		if (!form.reason) return setError("Debes Elegir un motivo de contacto");
		if (!form.message) return setError("Debes rellenar el Campo Mensage adicional");

		setSend(!send);
		console.log(form);
		setForm(INITIAL_FORM_STATE);
		setTimeout(() => {
			setSend(false);
		}, 3000);
	};
	return (
		<div className="contact-form-container container exercise-container">
			<h2>Formulario de Contacto</h2>
			<div className="contact-form">
				<div className="input-name-container">
					<label htmlFor="name">Nombre Completo</label>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						onChange={handleInputChange}
						placeholder="Introduce tu nombre completo"
					/>
				</div>
				<div className="input-email-container">
					<label htmlFor="email">Correo electrónico</label>
					<input
						type="email"
						name="email"
						id="email"
						value={form.email}
						onChange={handleInputChange}
						placeholder="Introduce un correo electrónico"
					/>
				</div>
				<div className="select-reason-container">
					<label htmlFor="reason">Motivo de Contacto</label>
					<select name="reason" id="reason" value={form.reason} onChange={handleInputChange}>
						<option disabled value={""}>
							Elige una Opción
						</option>
						<option value="question">Consulta</option>
						<option value="support">Soporte</option>
						<option value="others">Otros</option>
					</select>
				</div>
				<div className="textarea-message-container">
					<label htmlFor="textareaContactMessage">Mensaje adicional</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="5"
						placeholder="Introduce un mensaje adicional"
						value={form.message}
						onChange={handleInputChange}
					></textarea>
				</div>
				<button onClick={onFormSubmit}>Enviar Formulario</button>
				<small>Los campos con (*) son Obligatiorios</small>
			</div>
			{error && (
				<div className="error">
					<h4>{error}</h4>
				</div>
			)}
			{send && (
				<div className="aproved">
					<h4>Formulario Enviado</h4>
				</div>
			)}
		</div>
	);
};
