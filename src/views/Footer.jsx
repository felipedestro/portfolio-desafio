import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
	return (
		<footer className="container w-full h-24 center mt-20 scroll-mt-20 snap-start">
			<div className="flex justify-center items-center gap-9 cursor-pointer" id="contact">
				<img src={facebook} alt="" />
				<img src={instagram} alt="" />
				<img src={twitter} alt="" />
				<a href="https://www.linkedin.com/in/felipe-destro/" target="_blank">
					<img src={linkedin} alt="" />
				</a>
			</div>
			<p className="text-center mt-5 font-sans font-normal">Copyright ©2024 All rights reserved </p>
		</footer>
	);
}

export default Footer;
