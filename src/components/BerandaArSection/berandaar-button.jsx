import { ImCross } from "react-icons/im";
import { tw } from "../../utils/common";
// import { useState } from "react";
import { useEffect, useState } from "react";
import CONTENT from "../../utils/content";

const BerandaArButton = () => {
	const [clicked, setIsClicked] = useState(false);

	const handleGoToAr = () => {
		setTimeout(() => {
			window.location.href = CONTENT.arlink;
		}, 2000);
	};

	const handleMouseEnter = () => {
		setIsClicked(true);
	};

	const handleMouseLeave = () => {
		setIsClicked(false);
	};

	useEffect(() => {
		const button = document.querySelector("#btnGoAr");
		button.addEventListener("mouseenter", handleMouseEnter);
		button.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			button.removeEventListener("mouseenter", handleMouseEnter);
			button.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	return (
		<button className="relative mt-16" id="btnGoAr" onClick={handleGoToAr}>
			<div className="absolute z-10 left-[0.50rem] -top-2">
				<div
					className={tw(
						"block h-[4.8rem] w-20 bg-btnRed50 border-4 border-btnBorder rounded-full relative z-10 transition-all",
						"flex justify-center items-center",
						clicked && "top-[0.2rem]"
					)}
				>
					<ImCross className="text-3xl text-white" />
				</div>
				<div
					className={tw(
						"block h-[4.8rem] w-20  border-4 bg-btnRed100 border-btnBorder rounded-full absolute top-[0.6rem] z-0"
					)}
				></div>
			</div>
			<div className="relative z-0">
				<div
					className={tw(
						"block h-[5.8rem] w-24 bg-btnCream50 border-4 border-btnBorder rounded-full relative z-10",
						"flex justify-center items-center"
					)}
				></div>
				<div
					className={tw(
						"block h-[5.8rem] w-24 bg-btnCream100 border-4 border-btnBorder rounded-full absolute top-[0.6rem] z-0"
					)}
				></div>
			</div>
		</button>
	);
};

export default BerandaArButton;
