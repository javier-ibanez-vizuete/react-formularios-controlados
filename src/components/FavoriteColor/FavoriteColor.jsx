import { useState } from "react";
import "./FavoriteColor.css";

const INITIAL_COLOR = {
	value: "",
	text: "",
};

export const FavoriteColor = () => {
	const [color, setColor] = useState(INITIAL_COLOR);
	const { text, value } = color;

	const handleSelectChange = ({ target: { options, value, selectedIndex } }) => {
		if (!value) return setColor(INITIAL_COLOR);
		const text = options[selectedIndex].text;
		console.log(text);
		return setColor((prev) => ({ ...prev, text, value }));
	};

	return (
		<div className="favorite-color exercise-container">
			<h2>Color Favorito</h2>
			<div>
				<label htmlFor="favorite-color">Elige un Color</label>
				<select name="favorite-color" id="favorite-color" value={value} onChange={handleSelectChange}>
					<option value="">Elige una opción</option>
					<option value="red">Rojo</option>
					<option value="green">Verde</option>
					<option value="blue">Azul</option>
					<option value="yellow">Amarillo</option>
					<option value="white">Blanco</option>
					<option value="black">Negro</option>
				</select>
				{value && <h4>Tu color favorito es el {text}</h4>}
			</div>
		</div>
	);
};
