import DetailInfoWisataRatting from "./detailinfowisata-ratting";
import { PropTypes } from "prop-types";
import StarsReview from "../StarsReview";
import DetailInfoWisataMaps from "./detailinfowisata-map";
import { tw } from "../../utils/common";
import PopoverComp from "../PopoverComp";
import DetailInfoWisataFasilitas from "./detailinfowisata-fasilitas";

const DetailInfoWisata = (props) => {
	return (
		<div className="w-full px-4 py-8 bg-primary150 font-poppins">
			<div className="max-w-3xl m-auto">
				<div className={tw("mb-12", "sm:flex")}>
					<div className="flex flex-col items-center justify-center w-full gap-4 mb-6 sm:items-center sm:justify-center sm:mr-4">
						<h1 className="text-2xl font-bold text-center text-white sm:text-3xl">
							{props.dataDetail.nama}
						</h1>
						{props.dataDetail.ulasan && (
							<StarsReview
								ulasan={props.dataDetail.ulasan}
								className="flex flex-col items-center gap-2"
							/>
						)}
						{props.dataDetail.jamOprasional && (
							<PopoverComp
								namaTempat={props.dataDetail.nama}
								jamOprasional={props.dataDetail.jamOprasional}
							/>
						)}
					</div>
					<div>
						<h1 className="mb-4 text-3xl font-bold text-white sm:hidden">
							{props.dataDetail.nama}
						</h1>
						<p className="mb-4 text-base font-thin text-white">
							{props.dataDetail.desc}
						</p>
					</div>
				</div>
				<DetailInfoWisataFasilitas
					className="mb-12"
					fasilitas={props.dataDetail.fasilitas}
				/>
				<DetailInfoWisataRatting
					ulasan={props.dataDetail.ulasan}
					className="mb-12"
				/>
				<DetailInfoWisataMaps className="mb-12" coor={props.dataDetail.coor} />
			</div>
		</div>
	);
};

DetailInfoWisata.propTypes = {
	dataDetail: PropTypes.object,
};

export default DetailInfoWisata;
