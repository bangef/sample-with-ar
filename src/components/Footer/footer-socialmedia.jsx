import CONTENT from "../../utils/content";
import { tw } from "../../utils/common";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const FooterSocialMedia = (props) => {
	return (
		<div
			className={tw(
				"flex gap-8 w-full justify-center",
				"md:justify-start",
				props.className
			)}
		>
			{CONTENT.footer.socialMediaLinks.map((e, i) => (
				<Link to={e.link} key={`${i}-${e.alt}`} target="_blank">
					<img
						src={e.elem}
						alt={e.alt}
						width={20}
						height={20}
						className="transition-all hover:skew-y-12"
					/>
				</Link>
			))}
		</div>
	);
};

FooterSocialMedia.propTypes = {
	className: PropTypes.string,
};
