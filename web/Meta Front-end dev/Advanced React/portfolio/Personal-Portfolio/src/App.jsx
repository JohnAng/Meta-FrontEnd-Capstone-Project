import "./App.css";
import ContactForm from "./components/form/ContactForm";
import Hero from "./components/hero/Hero";
import Nav from "./components/navigation/Nav";
import Projects from "./components/projects/Projects";

export default function App() {
	return (
		<>
			<header>
				<Nav></Nav>
			</header>
			<main>
				<Hero></Hero>
				<Projects></Projects>
				<ContactForm></ContactForm>
			</main>
			<footer></footer>
		</>
	);
}
