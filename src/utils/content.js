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
	infowisata: {
		data: [
			{
				poster:
					"https://www.ancol.com/shared/images/5d3f526e-5729-4af1-8d31-5072bd832270.png",
				slug: "asthatirta",
				nama: "Asthatirta",
				alamat: "Taman Impian Jaya Ancol, Jakarta",
				desc:
					"Keren banget nih Atlantis Water Adventures punya wahana baru lagi. Iyaa keren banget lagi-lagi ada wahana baru di libur lebaran ini. Kali ini Atlantis Water Adventures menghadirkan Asthatirta yang merupakan wahana air terbesar di Indonesia dengan sensasi 8 slides yang berbeda-beda. Mau tahu ada apa aja ? Ini diaaa 8 slides tersebut :",
				ulasan: [
					{
						title: "Seru banget aseli",
						desc: "WAKTU PERTAMA KALI IKUT WAHANA INI RASANYA GERRR BANGET!!!",
						nilai: 0,
					},
					{
						title: "Biasa banget!",
						desc: "Biasa banget tjuy!",
						nilai: 3,
					},
					{
						title: "Ngeri banget, merinding 😂",
						desc: "Ngeri banget tjuyy aseliii, merindink!!!!!",
						nilai: 2,
					},
				],
				coor: [27.52045, 105.55216],
				jamOprasional: [
					{ hari: "Senin", jam: "09:00 - 17:00" },
					{ hari: "Selasa", jam: "09:00 - 17:00" },
					{ hari: "Rabu", jam: "09:00 - 17:00" },
					{ hari: "Kamis", jam: "09:00 - 17:00" },
					{ hari: "Jumat", jam: "09:00 - 17:00" },
					{ hari: "Sabtu", jam: "09:00 - 17:00" },
					{ hari: "Minggu", jam: "09:00 - 17:00" },
				],
			},
			{
				poster:
					"https://www.ancol.com/shared/file-manager/Unit%20Informasi/ODS/GAMBAR-ODS-MOLA-MOLA-2.jpg",
				slug: "wisata-dua",
				nama: "Wisata Dua",
				alamat: "Alamat Wisata Dua",
				desc:
					"Deskripsi wisata kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				ulasan: [
					{
						title: "Ulasan Pertama",
						desc:
							"Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 5,
					},
					{
						title: "Ulasan Kedua",
						desc:
							"Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 4,
					},
					{
						title: "Ulasan Ketiga",
						desc:
							"Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 3,
					},
				],
				coor: [41.37181, 73.86386],
				jamOprasional: [
					{ hari: "Senin", jam: "09:00 - 17:00" },
					{ hari: "Selasa", jam: "09:00 - 17:00" },
					{ hari: "Rabu", jam: "09:00 - 17:00" },
					{ hari: "Kamis", jam: "09:00 - 17:00" },
					{ hari: "Jumat", jam: "09:00 - 17:00" },
					{ hari: "Sabtu", jam: "09:00 - 17:00" },
					{ hari: "Minggu", jam: "09:00 - 17:00" },
				],
			},
			{
				poster: "",
				slug: "wisata-tiga",
				nama: "Wisata Tiga",
				alamat: "Alamat Wisata Tiga",
				desc:
					"Deskripsi wisata ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				ulasan: [
					{
						title: "Ulasan Pertama",
						desc:
							"Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 2,
					},
					{
						title: "Ulasan Kedua",
						desc:
							"Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 4,
					},
					{
						title: "Ulasan Ketiga",
						desc:
							"Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 1,
					},
				],
				coor: [-3.65992, 132.98763],
				jamOprasional: [
					{ hari: "Senin", jam: "09:00 - 17:00" },
					{ hari: "Selasa", jam: "09:00 - 17:00" },
					{ hari: "Rabu", jam: "09:00 - 17:00" },
					{ hari: "Kamis", jam: "09:00 - 17:00" },
					{ hari: "Jumat", jam: "09:00 - 17:00" },
					{ hari: "Sabtu", jam: "09:00 - 17:00" },
					{ hari: "Minggu", jam: "09:00 - 17:00" },
				],
			},
			{
				poster: "",
				slug: "wisata-empat",
				nama: "Wisata Empat",
				alamat: "Alamat Wisata Empat",
				desc:
					"Deskripsi wisata keempat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				ulasan: [
					{
						title: "Ulasan Pertama",
						desc:
							"Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 3,
					},
					{
						title: "Ulasan Kedua",
						desc:
							"Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 5,
					},
					{
						title: "Ulasan Ketiga",
						desc:
							"Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 2,
					},
				],
				coor: [1.39201, 47.37138],
				jamOprasional: [
					{ hari: "Senin", jam: "09:00 - 17:00" },
					{ hari: "Selasa", jam: "09:00 - 17:00" },
					{ hari: "Rabu", jam: "09:00 - 17:00" },
					{ hari: "Kamis", jam: "09:00 - 17:00" },
					{ hari: "Jumat", jam: "09:00 - 17:00" },
					{ hari: "Sabtu", jam: "09:00 - 17:00" },
					{ hari: "Minggu", jam: "09:00 - 17:00" },
				],
			},
			{
				poster: "",
				slug: "wisata-lima",
				nama: "Wisata Lima",
				alamat: "Alamat Wisata Lima",
				desc:
					"Deskripsi wisata kelima. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				ulasan: [
					{
						title: "Ulasan Pertama",
						desc:
							"Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 4,
					},
					{
						title: "Ulasan Kedua",
						desc:
							"Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 3,
					},
					{
						title: "Ulasan Ketiga",
						desc:
							"Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 1,
					},
				],
				coor: [-6.59492546260087, 106.80307765539614],
				jamOprasional: [
					{ hari: "Senin", jam: "09:00 - 17:00" },
					{ hari: "Selasa", jam: "09:00 - 17:00" },
					{ hari: "Rabu", jam: "09:00 - 17:00" },
					{ hari: "Kamis", jam: "09:00 - 17:00" },
					{ hari: "Jumat", jam: "09:00 - 17:00" },
					{ hari: "Sabtu", jam: "09:00 - 17:00" },
					{ hari: "Minggu", jam: "09:00 - 17:00" },
				],
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
