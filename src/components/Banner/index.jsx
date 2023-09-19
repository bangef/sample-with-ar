import { FaMountainCity } from "react-icons/fa6";

const Banner = () => {
	return (
		<div className="h-40 p-4 bg-cover bg-banner-pattern md:h-80 md:bg-center">
			<div className="flex items-center justify-center h-full">
				<div className="p-4 mr-4 rounded-full bg-nf-pattern">
					<FaMountainCity className="text-3xl text-secondary50 md:text-5xl" />
				</div>
				<span className="text-xl font-fasthand text-primary150 sm:text-2xl">
					Bogor, di mana alam dan ketenangan merajut harmoni!
				</span>
			</div>
		</div>
	);
};

export default Banner;
