import { useState } from "react";
import "./InputName.css";

export const InputName = () => {
	const [text, setText] = useState("");
	const [visible, setVisible] = useState(false);
	const onInputChange = ({ target: { value } }) => {
		if (!value.length) {
			setVisible(false);
		}
		setText(value);
	};

	const onInputKeyDown = ({ key }) => {
		if (key !== "Enter") return;
		return setVisible(!visible);
	};

	const onButtonClick = () => setVisible(!visible);

	return (
		<div className="exercise-input-name container">
			<div className="exercise-container">
				<h2>Texto desde input</h2>
				<label htmlFor="name">Crear nombre</label>
				<input
					type="text"
					name="name"
					id="name"
					value={text}
					onChange={onInputChange}
					placeholder="Introduce un nombre para crearlo"
					onKeyDown={onInputKeyDown}
				/>
				<button onClick={onButtonClick}>Crear nombre</button>
				{visible && <h4>{text}</h4>}
			</div>
		</div>
	);
};
