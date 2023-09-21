import { Popover } from "@headlessui/react";
import { HiClock } from "react-icons/hi";
import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";

const PopoverComp = (props) => {
	return (
		<Popover className="relative">
			<Popover.Button className="font-thin border-transparent border-none outline-none cursor-pointer text-secondary50 hover:cursor-pointer focus:ring-0">
				<div className="flex items-center gap-2">
					<HiClock className="text-2xl" />{" "}
					<span className="text-sm">Jam Operasional</span>
				</div>
			</Popover.Button>
			<Popover.Panel className="absolute z-10 p-2 bg-white rounded-lg w-[200px] -left-5  shadow-md">
				<h1 className="text-base font-semibold text-center text-primary150">
					Jam Operasional
				</h1>
				<h2 className="mb-2 text-sm font-semibold text-center text-primary50">
					{props.namaTempat}
				</h2>
				<ul className="m-auto text-sm font-semibold text-primary150">
					{props.jamOprasional &&
						props.jamOprasional.map((e) => (
							<li className="flex justify-between" key={nanoid(5)}>
								<span className="font-normal">{e.hari}</span>
								<span>{e.jam}</span>
							</li>
						))}
				</ul>
			</Popover.Panel>
		</Popover>
	);
};

PopoverComp.propTypes = {
	namaTempat: PropTypes.string,
	jamOprasional: PropTypes.array,
};

PopoverComp.defaultProps = {
	namaTempat: "Lorem Ipsum",
	jamOprasional: [
		{ hari: "Senin", jam: "09:00 - 17:00" },
		{ hari: "Selasa", jam: "09:00 - 17:00" },
		{ hari: "Rabu", jam: "09:00 - 17:00" },
		{ hari: "Kamis", jam: "09:00 - 17:00" },
		{ hari: "Jumat", jam: "09:00 - 17:00" },
		{ hari: "Sabtu", jam: "09:00 - 17:00" },
		{ hari: "Minggu", jam: "09:00 - 17:00" },
	],
};

export default PopoverComp;
