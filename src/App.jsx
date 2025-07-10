import { useState } from "react";
import { BookingForm } from "./components/BookingForm/BookingForm";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { CurrencyConverter } from "./components/CurrencyConverter/CurrencyConverter";
import { FavoriteColor } from "./components/FavoriteColor/FavoriteColor";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { InputName } from "./components/InputName/InputName";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { RatingButtons } from "./components/RatingButtons/RatingButtons";
import { VerificatorAge } from "./components/VerificatorAge/VerificatorAge";
import { products } from "./utils/products/products";
import { users } from "./utils/users/users";
import { RegisterUserForm } from "./components/registerUserForm/registerUserForm";

export const App = () => {
	const [currentUsers, setCurrentUsers] = useState(users);
	const randomNumber = () => Math.floor(Math.random() * (products.length - 1 - 0 + 1)) + 0;
	return (
		<>
			<header>
				<h1>Ejercicio Formularios Controlados</h1>
			</header>
			<main>
				<ContactForm />
				<InputName />
				<CharacterCounter />
				<VerificatorAge />
				<LoginForm users={currentUsers} />
				<FavoriteColor />
				<FeedbackForm />
				<RatingButtons product={products[randomNumber()]} />
				<BookingForm />
				<CurrencyConverter />
				<RegisterUserForm users={currentUsers} setCurrentUsers={setCurrentUsers}/>
			</main>
		</>
	);
};
