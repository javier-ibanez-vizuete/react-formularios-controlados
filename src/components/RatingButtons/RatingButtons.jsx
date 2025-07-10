import { useState } from "react";
import "./RatingButtons.css";

export const RatingButtons = ({ product }) => {
	const [rate, setRate] = useState(product.rate);
	console.log("Calificacion inicial", product.rate);

	const stars = [1, 2, 3, 4, 5];
	if (!product.name) return null;

	const handleButtonClick = (star) => {
		console.log(star);
		setRate(star);
		// NO SE COMO ACTUALIZAR EL PRODUCTO (product.rate = rate) no funciona
	};

	return (
		<div className="rating-buttons exercise-container">
			<h2>Botones de Valoracion</h2>
			<div className="product-view">
				<h4>{product.name}</h4>
				<div className="image-container">
					<img src={product.image} alt={product.name} />
				</div>
				<h4>
					Precio: <span>{product.price}</span>
				</h4>
				<h4>
					Valoracion: <span>{rate ? rate : 0}</span>
				</h4>
			</div>
			<h4>Valorar</h4>
			<div id="buttons-container">
				{stars.map((star) => (
					<button
						key={star}
						onClick={() => handleButtonClick(star)}
						className={star <= rate ? "full-star star" : "star"}
					></button>
				))}
			</div>
		</div>
	);
};
