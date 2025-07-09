import { useState } from "react";
import "./VerificatorAge.css";

// export const VerificatorAge = () => {
// 	const [age, setAge] = useState("");
// 	const [error, setError] = useState("");
// 	const [verification, setVerification] = useState(false);

// 	const onInputChange = ({ target: { value } }) => {
// 		if (!value) return setAge("");
// 		setVerification(false);
// 		setError("");
// 		setAge(Number(value));
// 	};
// 	const onButtonClick = () => {
// 		if (!age) return setError("Por favor Introduce una edad");
// 		if (age < 18) return setError("MENOR DE EDAD");
// 		if (age >= 18)
// 			return setVerification((prev) => {
// 				return !prev;
// 			});
// 	};

// 	return (
// 		<div className="verificator-age exercise-container">
// 			<h2>Verificador de edad</h2>
// 			<input type="number" name="age" id="age" value={age} onChange={onInputChange} />
// 			<button onClick={onButtonClick}>Verificar Edad</button>
// 			{error && <h4 className="error">{error}</h4>}
// 			{verification && <h4 className="aproved">MAYOR DE EDAD ({age})</h4>}
// 		</div>
// 	);
// };

const INITIAL_STATES = {
	age: "",
	error: "",
	verification: false,
};

export const VerificatorAge = () => {
	const [states, setStates] = useState(INITIAL_STATES);
	const { age, error, verification } = states;

	const onInputChange = ({ target: { value } }) => {
		const parsedValue = value === "" ? "" : Number(value);

		setStates((prev) => ({
			...prev,
			age: parsedValue,
			error: "",
			verification: false,
		}));
	};

	const onButtonClick = () => {
		setStates((prev) => {
			const { age } = prev;

			if (age === "" || isNaN(age)) {
				return { ...prev, error: "Introduce una edad" };
			}

			if (age.toString().includes(".")) {
				return { ...prev, error: "Caracter introducido no valido" };
			}

			if (age.toString().includes(",")) {
				return { ...prev, error: "Caracter introducido no valido" };
			}

			if (age < 18) {
				return { ...prev, error: "ACCESO DENEGADO" };
			}
			return { ...prev, verification: true };
		});
	};

	return (
		<div className="verificator-age exercise-container">
			<h2>Verificador de edad</h2>
			<input
				type="number"
				name="age"
				id="age"
				value={age}
				onChange={onInputChange}
				placeholder="Escribe tu edad"
			/>
			<button onClick={onButtonClick}>Verificar Edad</button>
			{error && <h4 className="error">{error}</h4>}
			{verification && <h4 className="aproved">ACCESO PERMITIDO</h4>}
		</div>
	);
};
