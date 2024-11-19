import { useState } from "react";
import { Link } from "react-router-dom";
import { tw } from "../../utils/common";
import HeaderHumbBtn from "./header-humb-btn";
import HeaderLinks from "./header-links";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="shadow-2xl bg-nf-pattern ">
			<div
				className={tw(
					"max-w-3xl p-4",
					"sm:px-0 sm:flex sm:flex-row sm:justify-between sm:m-auto"
				)}
			>
				<div className="flex items-center justify-between mb-4 sm:w-auto sm:mb-0">
					{/* logo/brand */}
					<div>
						<Link
							to="/"
							className={tw(
								"font-base font-poppins text-2xl cursor-pointer text-white transition-colors ease-linear delay-75",
								"hover:text-secondary50 hover:ease-linear"
							)}
						>
							<img src="/default/logo/logo2.svg" alt="logo" width="100" />
						</Link>
					</div>
					<HeaderHumbBtn isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				{/* Menu */}
				<HeaderLinks isOpen={isOpen} />
			</div>
		</div>
	);
};

export default Header;
