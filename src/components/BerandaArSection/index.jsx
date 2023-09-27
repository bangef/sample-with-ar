import { tw } from "../../utils/common";
import BerandaArButton from "./berandaar-button";
import VidoFootageBogor from "../../assets/video-footage-bogor-free-licence.mp4";
import IconMarker from "../../assets/icon-marker.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BerandaArSection = () => {
	return (
		<section className="w-full px-4 py-[100px] font-poppins relative xl:py-[200px]">
			<div className="relative z-10 w-full max-w-3xl m-auto">
				<div>
					<h1 className="text-3xl font-bold text-center text-white ">
						Go to Augmentasi Reality Location Based Tugu Kujang Bogor
					</h1>
				</div>
				<div className="relative flex flex-col items-center justify-center w-full ">
					<LazyLoadImage
						src={IconMarker}
						loading="lazy"
						width="80"
						className="relative z-20 top-24 animate-bounce"
					/>
					<BerandaArButton />
				</div>
			</div>
			<div
				className={tw(
					"absolute top-0 left-0 w-full h-full z-0",
					"after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(9,21,3,0.62)]"
				)}
			>
				<video
					src={VidoFootageBogor}
					autoPlay
					loop
					muted
					className="object-cover object-bottom w-full h-full"
				></video>
			</div>
		</section>
	);
};

export default BerandaArSection;
