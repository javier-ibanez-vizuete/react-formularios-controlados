import { useState } from "react";
import "./InputName.css";

export const InputName = () => {
	const [text, setText] = useState("");
	const onInputChange = ({ target: { value } }) => {
		setText(value);
		console.log(value);
	};

	return (
		<div className="input-name-container">
			<h2>Texto desde input</h2>
			<div className="exercise-container">
				<input type="text" name="name" id="name" value={text} onChange={onInputChange} />
				<button onClick={""}>Crear Parrafo</button>
			</div>
		</div>
	);
};
