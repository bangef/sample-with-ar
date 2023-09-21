import { useEffect, useState } from "react";
import { meanStars, tw } from "../../utils/common";
import { PropTypes } from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import starsActive from "../../assets/stars-active.svg";
import starsDisable from "../../assets/stars-disable.svg";
import { nanoid } from "nanoid";

const StarsReview = (props) => {
	const [stars, setStars] = useState([]);

	const addArr = () => {
		setStars([]);
		for (let i = 0; i < 5; i++) {
			if (i < (props.notrecap ? props.nilaiBintang : meanStars(props.ulasan))) {
				setStars((stars) => [...stars, "v"]);
			} else {
				setStars((stars) => [...stars, "x"]);
			}
		}
	};

	useEffect(() => {
		addArr();
	}, []);

	return (
		<div
			className={tw("flex", props.notrecap ? "items-center" : "", props.className)}
		>
			<div className="flex gap-1 mr-2">
				{stars &&
					stars.map((e) =>
						e === "v" ? (
							<LazyLoadImage
								key={nanoid(5)}
								src={starsActive}
								width={24}
								height={24}
								alt="stars-active"
								className="md:w-[20px] md:h-[20px]"
							/>
						) : (
							<LazyLoadImage
								key={nanoid(5)}
								src={starsDisable}
								width={24}
								height={24}
								alt="stars-disable"
								className="md:w-[20px] md:h-[20px]"
							/>
						)
					)}
			</div>
			{!props.notrecap && (
				<span className="block text-sm font-thin text-gray-200 md:text-[12px]">
					({props.ulasan.length} Ulasan)
				</span>
			)}
		</div>
	);
};

StarsReview.propTypes = {
	ulasan: PropTypes.array,
	notrecap: PropTypes.bool,
	nilaiBintang: PropTypes.number,
	className: PropTypes.string,
};

export default StarsReview;
