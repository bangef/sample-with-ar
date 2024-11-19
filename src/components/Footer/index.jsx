import CONTENT from "../../utils/content";
import Divider from "../Divider";
import { tw } from "../../utils/common";
import { FooterSocialMedia } from "./footer-socialmedia";
import { FooterLinks } from "./footer-links";
function Footer() {
	return (
		<footer className="w-full px-4 pt-10 bg-nf-pattern">
			<div
				className={tw(
					"flex flex-col justify-center items-center max-w-3xl m-auto",
					"text-white font-poppins",
					"md:flex-row md:justify-between"
				)}
			>
				{/* logo dan caption */}
				<div className="max-w-md mb-4">
					<div className="flex justify-center item-self-center mb-2 md:justify-start">
						<img src="/default/logo/logo3.svg" alt="logo" width="100" />
					</div>
					{/* caption */}
					<p className={tw("text-center font-thin mb-4", "md:text-start")}>
						Hidupkan Bogor dalam Dimensi Baru – Jelajahi Keindahan Kota Hujan
						dengan Augmented Reality 3D
					</p>
					{/* Social media */}
					<FooterSocialMedia className="mb-4 " />
				</div>
				{/* Menu */}
				<FooterLinks className="mb-4" />
			</div>
			<Divider />
			<div className="py-8">
				<p className="text-sm font-thin text-center text-white font-poppins">
					{CONTENT.footer.copyrightLabel}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
