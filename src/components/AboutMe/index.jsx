import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import AboutmeImage from "./aboutme-image";
import AboutmeContentDescribe from "./aboutme-content-describe";

const AboutMe = (props) => {
	return (
		<div className="relative px-4 py-8 md:py-10 xl:py-[100px] bg-primary150 font-poppins">
			<div className="max-w-3xl m-auto">
				<div
					className={tw(
						"relative z-10 flex flex-col w-full h-full",
						`${props.reverseLayout ? "sm:flex-row-reverse" : "sm:flex-row"}`
					)}
				>
					<AboutmeImage dataImage={props.dataImage} />
					<AboutmeContentDescribe content={props.content} />
				</div>
			</div>
			<div
				className={tw(
					"absolute w-1/3 h-1/2 bg-primary200",
					`${positionAccentEl(props.accentElements)}`
				)}
			></div>
		</div>
	);
};

const positionAccentEl = (props) => {
	switch (props) {
		case "tr":
			return "top-0 right-0 rounded-l-3xl";
		case "tl":
		default:
			return "top-0 left-0 rounded-r-3xl";
	}
};

AboutMe.propTypes = {
	reverseLayout: PropTypes.bool,
	content: PropTypes.object,
	accentElements: PropTypes.string,
	dataImage: PropTypes.object,
};

export default AboutMe;
