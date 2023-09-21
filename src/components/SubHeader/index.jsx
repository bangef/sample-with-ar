import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const SubHeader = (props) => {
	const objectParams = useLocation();
	const [breadcrumb, setBreadcrumb] = useState([]);

	const kapital = (params) => {
		const arr = params.split("-");
		const newArr = arr.map((e) => {
			return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
		});
		return newArr.join(" ");
	};

	const splitParams = () => {
		const arr = objectParams.pathname.split("/");
		let tempPath = "";
		const newArr = arr.map((e, i) => {
			if (i === 0) {
				return { title: "Beranda", path: "/" };
			} else if (i !== arr.length - 1) {
				tempPath += `/${e}`;
				return { title: kapital(e), path: tempPath };
			} else {
				return { title: kapital(e) };
			}
		});
		setBreadcrumb(newArr);
	};

	useEffect(() => {
		splitParams();
	}, []);

	return (
		<header
			style={{
				backgroundImage: `linear-gradient(0deg, #344C31 5%, rgba(38, 60, 40, 0.16) 125%), url('${
					props.bg
						? props.bg
						: "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/wolbv3u1tpmobxc6nlhj.jpg"
				}')`,
			}}
			className="w-full sm:py-[100px] md:py-[150px] xl:py-[200px] px-4 bg-no-repeat bg-center bg-cover py-16"
		>
			<div className="w-full max-w-3xl m-auto">
				{/* Title */}
				<div className="flex items-center justify-center w-full mb-4">
					<h1 className="text-3xl font-bold text-center text-secondary50 font-poppins sm:text-5xl">
						{props.menu}
					</h1>
				</div>
				{/* breadcrumb */}
				<div className="font-bold text-center text-white">
					{breadcrumb &&
						breadcrumb.map((e) => {
							if (e.path) {
								return (
									<div key={nanoid(5)} className="inline">
										<Link to={e.path} className="text-secondary50 hover:opacity-50">
											{e.title}
										</Link>
										<HiChevronRight className="inline text-secondary50" />
									</div>
								);
							} else {
								return (
									<span key={nanoid(5)} className="font-thin text-gray-300">
										{e.title}
									</span>
								);
							}
						})}
				</div>
			</div>
		</header>
	);
};

SubHeader.propTypes = {
	menu: PropTypes.string,
	bg: PropTypes.string,
};
export default SubHeader;
