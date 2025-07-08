import { ContactForm } from "./components/ContactForm/ContactForm";
import { InputName } from "./components/ContactForm/InputName/InputName";

export const App = () => {
	return (
		<>
			<header>
				<h1>Ejercicio Formularios Controlados</h1>
			</header>
			<main>
				<ContactForm />
				<InputName />
			</main>
		</>
	);
};
