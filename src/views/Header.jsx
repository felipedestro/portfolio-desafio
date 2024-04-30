import Button from "../components/Button";

function Header() {
	return (
		<>
			<div className="container mt-36">
				<div className="mx-28">
					<p className="text-4xl font-sans font-bold leading-snug">
						Olá eu sou Felipe Destro <br />
						Futuro Desenvolvedor Fullstack
					</p>
					<p className="text-lg font-normal leading-6 mt-10">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
						sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
						consequat sunt nostrud amet.
					</p>
					<Button text={"Download Resumo"} click={null} />
				</div>
			</div>
		</>
	);
}

export default Header;
