import { useState } from "react";
import "./CharacterCounter.css";

export const CharacterCounter = () => {
	const [text, setText] = useState("");
	const [number, setNumber] = useState(0);

	const onInputChange = ({ target: { value } }) => {
		setText(value);
		setNumber(value.trim().length);
	};

	const onButtonClick = () => {
		setNumber(0);
		setText("");
	};

	return (
		<div className="exercise-container">
			<h2>Contador de Caracteres</h2>
			<div>
				<label htmlFor="name">{number}</label>
				<input
					type="text"
					name="name"
					id="name"
					value={text}
					onChange={onInputChange}
					placeholder="Introduce cualquier caracter"
				/>
				<button onClick={onButtonClick}>Reiniciar Contador</button>
			</div>
		</div>
	);
};
