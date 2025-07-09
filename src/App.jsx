import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { InputName } from "./components/InputName/InputName";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { VerificatorAge } from "./components/VerificatorAge/VerificatorAge";

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
				<VerificatorAge />
				<LoginForm />
			</main>
		</>
	);
};
