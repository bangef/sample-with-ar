import SosmedFb from "../assets/sosmed-facebook.svg";
import SosmedIg from "../assets/sosmed-instagram.svg";
import SosmedYt from "../assets/sosmed-youtube.svg";

/**
 * CONTENT.aboutme.data.dataImage: apabila ingin masukan dari lokal di import terlebih dahulu.
 */
const CONTENT = {
	title: "LBAR - Tugu Kujang Bogor",
	header: {
		headerMenu: [
			{
				title: "Beranda",
				path: "/",
			},
			{
				title: "Info Wisata",
				path: "/info-wisata",
			},
			{
				title: "Galeri",
				path: "/galeri",
			},
			{
				title: "Tentang Kami",
				path: "/tentang-kami",
			},
		],
	},
	aboutme: {
		data: [
			{
				jabatan: "Dosen Pembimbing 1",
				nama: "Tifani Nabarian S.Kom, M.Kom",
				jabatan2: "Kaprodi",
				deskripsi:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est dolores dicta atque deleniti iusto dolorem animi inventore, placeat corrupti?",
				pengalaman: [
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
				],
				reverseLayout: false,
				ae: "tr",
				dataImage: {
					source: "https://picsum.photos/200/250.jpg",
					alt: "foto profil dosen pembimbing 1",
					accentElement: "tr",
					quote: "lorem ipsum dolor ammet asoy cihuy.",
				},
			},
			{
				jabatan: "Dosen Pembimbing 1",
				nama: "Tifani Nabarian S.Kom, M.Kom",
				jabatan2: "Kaprodi",
				deskripsi:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est dolores dicta atque deleniti iusto dolorem animi inventore, placeat corrupti?",
				pengalaman: [
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
				],
				reverseLayout: true,
				ae: "tl",
				dataImage: {
					source: "https://picsum.photos/200/250.jpg",
					alt: "foto profil dosen pembimbing 1",
					accentElement: "tr",
					quote: "lorem ipsum dolor ammet asoy cihuy.",
				},
			},
			{
				jabatan: "Dosen Pembimbing 2",
				nama: "Tifani Nabarian S.Kom, M.Kom",
				jabatan2: "Kaprodi",
				deskripsi:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est dolores dicta atque deleniti iusto dolorem animi inventore, placeat corrupti?",
				pengalaman: [
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
					"Lorem ipsum dolor sit amet.",
				],
				reverseLayout: false,
				ae: "tr",
				dataImage: {
					source: "https://picsum.photos/200/250.jpg",
					alt: "foto profil dosen pembimbing 1",
					accentElement: "tr",
					quote: "lorem ipsum dolor ammet asoy cihuy.",
				},
			},
		],
	},
	footer: {
		footerMenu: [
			{
				title: "Beranda",
				path: "/",
			},
			{
				title: "Info Wisata",
				path: "/info-wisata",
			},
			{
				title: "Galeri",
				path: "/galeri",
			},
			{
				title: "Tentang Kami",
				path: "/tentang-kami",
			},
		],
		socialMediaLinks: [
			{
				link: "https://facebook.com/testing",
				alt: "Icon sosial media facebook",
				elem: SosmedFb,
			},
			{
				link: "https://instagram.com/testing",
				alt: "Icon sosial media instagram",
				elem: SosmedIg,
			},
			{
				link: "https://youtube.com/testing",
				alt: "Icon sosial media youtube",
				elem: SosmedYt,
			},
		],
		copyrightLabel: `Copyright ${new Date().getFullYear()} @ LBAR - Tugu Kujang Bogor, All Right Reserved`,
	},
};
export default CONTENT;
