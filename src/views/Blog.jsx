function Blog() {
	return (
		<div className="containter mt-10 px-3 py-5 bg-blue-100 scroll-mt-20" id="blog">
			<div className="mx-28">
				{/* container initaill blog */}
				<p className="mt-3 font-sans font-normal text-xl">Blog</p>

				{/* content items  */}
				<div className="flex gap-10 justify-start mt-6">
					{/* items */}
					<div className="bg-white p-8 w-100 h-72 rounded-xl flex-none">
						<h3 className="font-sans font-bold text-2xl">
							{/* Title */}
							Making a design system from scratch
						</h3>
						{/* Date and description */}
						<p className="flex gap-7 my-4 font-sans font-normal text-lg">
							<span className="flex-none">12 Feb 2030</span>
							<span className="flex-none">Design, Pattern</span>
						</p>
						{/* details */}
						<p className="font-sans font-normal text-base">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet
						</p>
					</div>
					{/* items */}
					<div className="bg-white p-8 w-100 h-72 rounded-xl flex-none">
						<h3 className="font-sans font-bold text-2xl">Creating pixel perfect icons in Figma</h3>
						<p className="flex gap-7 my-4 font-sans font-normal text-lg">
							<span className="flex-none">12 Feb 2030</span>
							<span className="flex-none">Figma, Icon Design</span>
						</p>
						<p className="font-sans font-normal text-base">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
