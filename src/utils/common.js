import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (...classNames) => twMerge(clsx(...classNames));

/**
 *
 * @param {Aray} stars
 * @returns
 */
export const meanStars = (stars) => {
	let result = 0;
	const filterNilai = stars.map(({ nilai }) => nilai);
	filterNilai.forEach((e) => (result += e));
	return Math.round((result * 5) / (5 * stars.length));
};
