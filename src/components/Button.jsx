// eslint-disable-next-line react/prop-types
function Button({ text, click }) {
	return (
		<button className="bg-red-500 text-white py-3 px-5 font-sans font-medium text-xl rounded-md mt-8" onClick={click}>
			{text}
		</button>
	);
}

export default Button;
