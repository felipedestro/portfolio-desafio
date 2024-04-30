import photo from "../assets/img.svg";

function Projects() {
	return (
		<div className="container mt-10 scroll-mt-20 snap-start" id="projects">
			<div className="mx-28 divide-y-2 divide-y-reverse divide-slate-300">
				<p className="font-sans font-normal text-xl mb-3 ">Projetos</p>
				{/* content items */}
				<div className="flex gap-14 py-5">
					<img src={photo} alt="error" className="w-60 flex-none" />
					<div className="flex flex-col gap-7">
						<h3 className="font-sans font-bold text-3xl">Designing Dashboards</h3>
						<p className="font-sans text-xl">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
				<div className="flex gap-14 py-5">
					<img src={photo} alt="error" className="w-60 flex-none" />
					<div className="flex flex-col gap-7">
						<h3 className="font-sans font-bold text-3xl">Designing Dashboards</h3>
						<p className="font-sans text-xl">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
