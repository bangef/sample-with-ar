import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (...classNames) => twMerge(clsx(...classNames));
