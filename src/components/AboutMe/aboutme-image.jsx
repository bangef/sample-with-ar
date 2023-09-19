import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutmeImage = (props) => {
	return (
		<div className="flex items-center justify-center mb-16 sm:mb-0 sm:w-1/2">
			<div className="relative">
				<LazyLoadImage
					src={props.dataImage.source}
					alt={props.dataImage.alt}
					width={200}
					height={250}
					placeholderSrc={"https://picsum.photos/50/150/?blur=2"}
				/>
				<div
					className={tw(
						"w-[20px] h-[150px] bg-secondary50 rounded-sm absolute bottom-10 z-0",
						`${positionAccentEl2(props.dataImage.accentElement)}`
					)}
				></div>
				<div
					className={tw(
						"w-[180px] h-[80px]  bg-primary50 rounded-xl absolute -bottom-10 z-20 left-2 flex justify-center items-center"
					)}
				>
					<p className="text-center text-secondary50 font-fasthand text-[14px] px-4">
						{props.dataImage.quote}
					</p>
				</div>
			</div>
		</div>
	);
};

const positionAccentEl2 = (props) => {
	switch (props) {
		case "tr":
			return "-left-4";
		case "tl":
		default:
			return "-right-4";
	}
};

AboutmeImage.propTypes = {
	dataImage: PropTypes.object,
};

export default AboutmeImage;
