import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import { PiToiletFill } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";

const DetailInfoWisataFasilitas = (props) => {
	return (
		<div
			className={tw(
				"flex flex-col items-center justify-center w-full gap-4 ",
				props.className
			)}
		>
			<h1 className="mb-4 text-2xl font-bold text-center text-white sm:text-3xl">
				Fasilitas
			</h1>
			<div className="flex flex-col justify-start max-w-3xl">
				<div className="grid justify-center w-full grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-6 place-content-center">
					<div className="flex flex-col items-center justify-center w-24 h-24 text-white border-2 border-dashed rounded-full border-opacity-20">
						<PiToiletFill className="mb-2 text-3xl" />
						<span className="block text-xs font-semibold tracking-wide">WC Umum</span>
					</div>
					<div className="flex flex-col items-center justify-center w-24 h-24 text-white border-2 border-dashed rounded-full border-opacity-20">
						<FaTrashCan className="mb-2 text-3xl" />
						<span className="block text-xs font-semibold tracking-wide text-center">
							Tempat Sampah
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailInfoWisataFasilitas.propTypes = {
	className: PropTypes.string,
};

export default DetailInfoWisataFasilitas;
