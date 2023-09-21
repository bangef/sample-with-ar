import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { tw } from "../../utils/common";
import StarsReview from "../StarsReview";

const Card = (props) => {
	return (
		<Link
			to={`/info-wisata/${
				props.dataWisata.slug ? props.dataWisata.slug : "not-found"
			}`}
			className="transition-all"
		>
			<div className="overflow-hidden hover:shadow-md h-80 rounded-xl hover:shadow-secondary50">
				<div
					style={{
						"--image-url": `url(${
							props.dataWisata.poster !== ""
								? props.dataWisata.poster
								: "https://picsum.photos/300/200"
						})`,
					}}
					className={tw(
						"w-full h-2/3",
						"bg-[image:var(--image-url)]",
						"bg-cover bg-center"
					)}
				></div>
				<div className="p-4 text-white bg-primary50 h-1/3 font-poppins">
					<p className="text-sm font-semibold md:text-[12px]">
						{props.dataWisata.alamat}
					</p>
					<h2 className="mb-2 text-xl font-semibold md:text-md md:mb-0">
						{props.dataWisata.nama}
					</h2>
					<StarsReview ulasan={props.dataWisata.ulasan} />
				</div>
			</div>
		</Link>
	);
};

Card.propTypes = {
	dataWisata: PropTypes.object,
};

export default Card;
