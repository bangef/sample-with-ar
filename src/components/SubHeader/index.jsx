import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { PropTypes } from "prop-types";

const SubHeader = (props) => {
	return (
		<header className="w-full sm:py-[100px] md:py-[150px] xl:py-[200px] px-4 bg-subheader-pattern bg-no-repeat bg-center bg-cover py-16">
			<div className="w-full max-w-3xl m-auto">
				{/* Title */}
				<div className="flex items-center justify-center w-full mb-4">
					<h1 className="text-3xl font-bold text-center text-secondary50 font-poppins sm:text-5xl">
						{props.menu}
					</h1>
				</div>
				{/* breadcrumb */}
				<div className="font-bold text-center text-white">
					<Link to="/" className="text-secondary50 hover:opacity-50">
						Beranda
					</Link>
					<HiChevronRight className="inline text-secondary50" />
					<span className="font-thin text-gray-300"> {props.menu}</span>
				</div>
			</div>
		</header>
	);
};

SubHeader.propTypes = {
	menu: PropTypes.string,
};
export default SubHeader;
