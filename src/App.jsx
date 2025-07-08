import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { InputName } from "./components/InputName/InputName";

export const App = () => {
	return (
		<>
			<header>
				<h1>Ejercicio Formularios Controlados</h1>
			</header>
			<main>
				<ContactForm />
				<InputName />
				<CharacterCounter />
			</main>
		</>
	);
};
