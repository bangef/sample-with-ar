import CONTENT from "../../utils/content";
import { tw } from "../../utils/common";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const FooterLinks = (props) => {
	return (
		<ul
			className={tw(
				"flex flex-col justify-center text-center gap-1",
				props.className
			)}
		>
			<li className="mb-2 text-xl font-bold">Menu</li>
			{CONTENT.footer.footerMenu.map((e, i) => (
				<li key={`${i}-${e.title}`} className="relative group">
					<Link to={e.path} className={tw("font-thin", "hover:text-secondary50")}>
						{e.title}
					</Link>
					<span className="absolute left-0 w-0 h-1 transition-all bg-secondary50 -bottom-1 group-hover:w-full"></span>
				</li>
			))}
		</ul>
	);
};

FooterLinks.propTypes = {
	className: PropTypes.string,
};
