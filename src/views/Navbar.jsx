function Navbar() {
	return (
		<>
			<header className="flex gap-10 justify-end py-6 pr-20 bg-white fixed top-0 right-0 w-full snap-y">
				<a href="#" className="text-xl font-semibold font-sans">
					Início
				</a>
				<a href="#projects" className="text-xl font-semibold font-sans">
					Projetos
				</a>
				<a href="#blog" className="text-xl font-semibold font-sans">
					Blog
				</a>
				<a href="#contact" className="text-xl font-semibold font-sans">
					Contato
				</a>
			</header>
		</>
	);
}

export default Navbar;
