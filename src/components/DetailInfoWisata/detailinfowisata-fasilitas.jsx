import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import DetailInfoWisataFasilitasIcon from "./detailinfowisatafasilitas-icon";
import { AiOutlineWarning } from "react-icons/ai";

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
				{props.fasilitas && props.fasilitas.length > 0 ? (
					<div className="grid justify-center w-full grid-cols-3 gap-10 sm:grid-cols-3 md:grid-cols-4 place-content-center">
						{props.fasilitas &&
							props.fasilitas.map((e) => (
								<DetailInfoWisataFasilitasIcon key={nanoid(5)} tipe={e} />
							))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center w-full gap-4 text-xl font-semibold text-center text-white">
						<AiOutlineWarning className="text-[100px]" />
						<h1>Ooow!! Fasilitas tidak ditemukan</h1>
					</div>
				)}
			</div>
		</div>
	);
};

DetailInfoWisataFasilitas.propTypes = {
	className: PropTypes.string,
	fasilitas: PropTypes.array,
};

export default DetailInfoWisataFasilitas;
