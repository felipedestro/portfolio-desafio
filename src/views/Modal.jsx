import { useState, useEffect } from "react";
import "../index.css";
import Button from "../components/Button";

function Modal() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [modalOpen, setModalOpen] = useState(false);

	const cancel = () => {
		setModalOpen(!modalOpen);
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setModalOpen(true);
	}, []);

	if (modalOpen) {
		return (
			<div className="modal modal-in">
				<div className="modal__container">
					<div>
						<p className="text-center mb-6 text-xl">
							Seja muito bem vindo ao meu portifólio resposta ao desafio de número de 03 da Escola DNC versão 2024
						</p>
						<p className="text-center mb-6 text-xl">
							Este projeto tem como objetivo responder a um desafio do curso de <strong>Fullstack da Escola DNC</strong>
						</p>
						<p className="text-center mb-4 text-md">
							Para conhecer mais dos meus projetos acesse:
							<a href="https://github.com/felipedestro" target="_blank" className="text-red-500 ml-2">
								Felipe Destro - Github
							</a>
						</p>
					</div>
					<div className="flex justify-center">
						<Button text={"Fechar"} click={cancel} />
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default Modal;
