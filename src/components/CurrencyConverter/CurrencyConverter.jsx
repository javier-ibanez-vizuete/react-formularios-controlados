import { useState } from "react";
import "./CurrencyConverter.css";

const conversionRates = {
	USD: 1.1,
	GBP: 0.85,
	JPY: 140.0,
	AUD: 1.6,
	CAD: 1.5,
};

const INITIAL_FORM_STATES = {
	quantity: "",
	currency: "",
	newCurrency: "",
};

export const CurrencyConverter = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATES);
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState("");
	const { quantity, currency, newCurrency } = form;

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setError("");
		setVerified(false);
		setForm((prev) => ({ ...prev, [name]: value, newCurrency: "" }));
	};

	const onButtonClick = () => {
		const { quantity, currency, newCurrency } = form;

		if (!quantity) return setError("Debe introducir una cantidad");
		if (!currency) return setError("Debe Elegir una moneda");
		const newValue = quantity * conversionRates[currency];

		setForm((prev) => ({ ...prev, newCurrency: newValue }));
		if (!verified) setVerified((prev) => !prev);
	};

	return (
		<div className="currency-converter exercise-container">
			<h2>Conversor de Euros</h2>
			<div className="inputs-container">
				<input type="number" name="quantity" id="quantity" value={quantity} onChange={handleInputChange} placeholder="Introduce una cantidad"/>
				<select name="currency" id="currency" value={currency} onChange={handleInputChange}>
					<option value="">Elige una opción</option>
					{Object.entries(conversionRates).map(([key]) => (
						<option key={key} value={key}>
							{key}
						</option>
					))}
				</select>
			</div>
			<button onClick={onButtonClick}>Convertir Moneda</button>
			{verified && (
				<div className="result-container">
					<h4>
						{quantity}€ son   {newCurrency} {currency}
					</h4>
				</div>
			)}
			{error && <h4 className="error">{error}</h4>}
		</div>
	);
};
