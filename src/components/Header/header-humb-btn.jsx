import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { tw } from "../../utils/common";
import PropTypes from "prop-types";

const HeaderHumbBtn = (props) => {
	return (
		<button
			className={tw(
				"p-2 text-xl text-white bg-white border-white rounded-md bg-opacity-20  transition border-2",
				"hover:bg-opacity-10 hover:transition-color hover:text-secondary50 hover:border-secondary50 hover:ring-2 hover:ring-secondary50 hover:ring-offset-secondary50-100/50",
				"sm:hidden"
			)}
			onClick={() => props.setIsOpen(!props.isOpen)}
		>
			{props.isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
		</button>
	);
};

HeaderHumbBtn.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
};

export default HeaderHumbBtn;
