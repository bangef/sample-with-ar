import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import { PiToiletFill } from "react-icons/pi";
import { FaTrashCan, FaMosque } from "react-icons/fa6";
import { TbDisabled } from "react-icons/tb";
import { GiGreenhouse } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const DetailInfoWisataFasilitasIcon = (props) => {
	const iconsFilter = (tipe) => {
		switch (tipe) {
			case "toilet":
				return (
					<>
						<PiToiletFill className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							WC Umum
						</span>
					</>
				);
			case "trash":
				return (
					<>
						<FaTrashCan className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							Tempat Sampah
						</span>
					</>
				);
			case "difable":
				return (
					<>
						<TbDisabled className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							Ramah Kebutuhan Khusus
						</span>
					</>
				);
			case "greenhouse":
				return (
					<>
						<GiGreenhouse className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							Ramah Lingkungan
						</span>
					</>
				);
			case "mosque":
				return (
					<>
						<FaMosque className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							Tempat Ibadah
						</span>
					</>
				);
			case "foodcourt":
				return (
					<>
						<IoFastFood className="mb-2 text-base sm:text-3xl" />
						<span className="block sm:text-xs text-[10px] font-semibold tracking-wide text-center">
							Foodcourt
						</span>
					</>
				);
			default:
				return <PiToiletFill className="mb-2 text-base sm:text-3xl" />;
		}
	};
	return (
		<div
			className={tw(
				"flex flex-col items-center justify-center w-20 h-20 text-white border-2 border-dashed rounded-full sm:w-24 sm:h-24 border-opacity-20",
				props.className
			)}
		>
			{props.tipe && iconsFilter(props.tipe)}
		</div>
	);
};

DetailInfoWisataFasilitasIcon.propTypes = {
	className: PropTypes.string,
	tipe: PropTypes.string,
};

export default DetailInfoWisataFasilitasIcon;
