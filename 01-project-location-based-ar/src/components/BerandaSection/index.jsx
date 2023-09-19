import { LazyLoadImage } from "react-lazy-load-image-component";
import aksen from "../../assets/aksen-beranda.svg";
import aksen2 from "../../assets/aksen-beranda-2.png";
import PropTypes from "prop-types";
import { tw } from "../../utils/common";

const BerandaSection = (props) => {
	return (
		<div
			className={tw(
				"font-poppins sm:flex sm:justify-between max-h-2xl",
				props.dataContent.reverse ? "flex-row-reverse" : "",
				props.className ? props.className : "bg-primary50"
			)}
		>
			<div className="w-full max-w-2xl sm:w-1/2 md:1/2">
				<LazyLoadImage
					src="https://picsum.photos/200/200.webp"
					alt="test"
					width={639}
					height={639}
					className="w-full max-w-2xl "
				/>
			</div>
			<div className="px-4 py-8 sm:py-10 xl:py-[100px] w-full max-w-3xl relative ">
				<div className="relative z-10">
					<p className="mb-2 text-sm font-thin text-white">Lorem, ipsum dolor.</p>
					<h1 className="mb-2 text-5xl font-bold leading-[3.5rem] text-white">
						Lorem ipsum dolor sit.
					</h1>
					<p className="mb-2 text-2xl font-thin text-secondary50">Lorem, ipsum.</p>
					<p className="mb-2 text-base font-thin text-white">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quaerat?
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla, quae
						similique atque quidem aliquid, voluptates dignissimos inventore odit
						doloremque saepe molestiae eveniet, delectus consequatur debitis illo
						sunt. Quibusdam vel eos perferendis harum sapiente suscipit repellat
						officiis perspiciatis repudiandae cumque asperiores esse id facere hic,
						porro cupiditate possimus vitae! Enim commodi voluptatibus numquam illo
						accusantium quod quas reiciendis culpa aperiam.
					</p>
				</div>
				<LazyLoadImage
					src={aksen}
					alt="aksen"
					width={100}
					height={100}
					className={tw(
						"absolute top-0 -z-0  w-full max-w-[150px]",
						props.dataContent.reverse ? "right-0" : "left-0 scale-x-[-1]"
					)}
				/>
				<LazyLoadImage
					src={aksen2}
					alt="aksen 2"
					className={tw(
						"absolute bottom-0 -z-0 w-full max-w-[300px]",
						props.dataContent.reverse ? "left-0 scale-x-[-1]" : "right-0"
					)}
				/>
			</div>
		</div>
	);
};

BerandaSection.propTypes = {
	dataContent: PropTypes.object,
	className: PropTypes.string,
};

export default BerandaSection;
