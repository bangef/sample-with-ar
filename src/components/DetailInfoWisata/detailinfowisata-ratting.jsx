import { PropTypes } from "prop-types";
import { nanoid } from "nanoid";
import StarsReview from "../StarsReview";
import { tw } from "../../utils/common";

const DetailInfoWisataRatting = (props) => {
	return (
		<div
			className={tw(
				"flex flex-col items-center justify-center w-full gap-4 ",
				props.className
			)}
		>
			<h1 className="mb-4 text-2xl font-bold text-center text-white sm:text-3xl">
				Peringkat dan Ulasan
			</h1>
			<div className="flex flex-col justify-start w-full gap-4">
				{props.ulasan &&
					props.ulasan.map((e) => (
						<div key={nanoid(5)}>
							<StarsReview
								notrecap={true}
								nilaiBintang={e.nilai}
								className="mb-2"
							/>
							<h1 className="text-lg font-semibold text-secondary50">
								{e.title}
							</h1>
							<p className="text-base font-thin text-white">{e.desc}</p>
						</div>
					))}
			</div>
		</div>
	);
};

DetailInfoWisataRatting.propTypes = {
	ulasan: PropTypes.array,
	className: PropTypes.string,
};

export default DetailInfoWisataRatting;
