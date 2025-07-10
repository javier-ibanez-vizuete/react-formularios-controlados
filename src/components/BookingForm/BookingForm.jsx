import { useState } from "react";
import "./BookingForm.css";

const INITIAL_FORM_DATES = {
	userName: "",
	userEmail: "",
	userDate: "",
};

export const BookingForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_DATES);
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState("");

	const today = new Date().toISOString().split("T")[0];

	const { userName, userEmail, userDate } = form;

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setError("");
		setVerified(false);
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const onButtonClick = () => {
		const { userName, userEmail, userDate } = form;
		if (!userName) return setError("Introduce un Nombre");
		if (!userEmail) return setError("Introduce un Correo Electronico");
		if (!userDate) return setError("Introduce una Fecha de Reserva");
		if (verified) {
			setForm(INITIAL_FORM_DATES);
		}
		setVerified((prev) => !prev);
	};

	return (
		<div className="booking-form exercise-container">
			<h2>Reserva Hotel</h2>
			<div>
				<div className="input-container">
					<label htmlFor="userName">Nombre</label>
					<input
						type="text"
						name="userName"
						id="userName"
						value={userName}
						onChange={handleInputChange}
						placeholder="Introduce tu nombre"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="userEmail">Correo Electronico</label>
					<input
						type="email"
						name="userEmail"
						id="userEmail"
						value={userEmail}
						onChange={handleInputChange}
						placeholder="Introduce un correo electrónico"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="userDate">Fecha Reserva</label>
					<input
						type="date"
						name="userDate"
						id="userDate"
						value={userDate}
						onChange={handleInputChange}
						min={today}
					/>
				</div>
				<button onClick={onButtonClick}>Reservar</button>
				{error && <h4 className="error">{error}</h4>}
				{verified && (
					<>
						<h4 className="aproved">Reserva Confirmada</h4>
						<div className="booking-details-container">
							<h4>
								Nombre: <span>{userName}</span>
							</h4>
							<h4>
								Email: <span>{userEmail}</span>
							</h4>
							<h4>
								Fecha: <span>{userDate}</span>
							</h4>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
