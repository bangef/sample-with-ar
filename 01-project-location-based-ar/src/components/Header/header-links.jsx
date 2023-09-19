import CONTENT from "../../utils/content";
import { Link } from "react-router-dom";
import { tw } from "../../utils/common";
import PropTypes from "prop-types";

const HeaderLinks = (props) => {
	return (
		<ul
			className={tw(
				`flex-col gap-2 font-poppins  ${props.isOpen ? "flex" : "hidden"} `,
				"sm:flex-row sm:gap-4 sm:items-center sm:flex"
			)}
		>
			{CONTENT.header.headerMenu.map((e, i) => {
				return (
					<li
						key={`${i}-${e.title}`}
						className={tw(
							"relative group ",
							"text-white transition delay-75 ease-linear",
							"hover:text-secondary50 hover:transition hover:delay-75 hover:ease-linear hover:cursor-pointer"
						)}
					>
						<Link to={e.path} className={tw("py-2 block")}>
							{e.title}
						</Link>
						<span className="absolute left-0 w-0 h-1 transition-all bg-secondary50 -bottom-1 group-hover:w-full"></span>
					</li>
				);
			})}
		</ul>
	);
};

HeaderLinks.propTypes = {
	isOpen: PropTypes.bool,
};
export default HeaderLinks;
