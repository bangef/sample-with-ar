/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary50: "#6D8C54",
				primary100: "#678551",
				primary150: "#344C31",
				primary200: "#263C28",
				secondary50: "#F7C35F",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				fasthand: ["Fasthand", "cursive"],
			},
			backgroundImage: {
				"nf-pattern":
					"linear-gradient(90deg, rgba(38,60,40,1) 0%, rgba(109,140,84,1) 100%)",
				"banner-pattern":
					"linear-gradient(92deg, rgba(248, 204, 119, 0.80) 44.78%, rgba(248, 204, 119, 0.16) 104.31%),url('https://thumb.viva.id/intipseleb/1265x711/2022/06/23/62b4012220b29-tugu-kujang.jpg')",
				"subheader-pattern":
					"linear-gradient(0deg, #344C31 5%, rgba(38, 60, 40, 0.16) 125%), url('https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/wolbv3u1tpmobxc6nlhj.jpg')",
			},
			listStyleImage: {
				checkmark: 'url("/src/assets/checkmark.png")',
			},
		},
	},
	plugins: [],
};
