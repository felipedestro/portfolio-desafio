import Modal from "./views/Modal";
import Blog from "./views/Blog";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Navbar from "./views/Navbar";
import Projects from "./views/Projects";

function App() {
	return (
		<>
			<Modal />
			<Navbar />
			<Header />
			<Blog />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
