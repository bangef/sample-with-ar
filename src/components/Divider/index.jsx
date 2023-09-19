import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";

function Divider(props) {
	return (
		<div
			className={tw(
				props.height === undefined ? `h-[0.5px]` : `h-[${props.height}px]`,
				"bg-white w-full opacity-20"
			)}
		></div>
	);
}

Divider.propTypes = {
	height: PropTypes.number,
};

export default Divider;
