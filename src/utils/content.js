import SosmedFb from "../assets/sosmed-facebook.svg";
import SosmedIg from "../assets/sosmed-instagram.svg";
import SosmedYt from "../assets/sosmed-youtube.svg";

/**
 * CONTENT.aboutme.data.dataImage: apabila ingin masukan dari lokal di import terlebih dahulu.
 */
const CONTENT = {
	title: "ARLB - Tugu Kujang Bogor",
	arlink: "https://bangef.github.io/testing-arjs/",
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
	beranda: {
		data: [
			{
				image:
					"https://static.republika.co.id/uploads/images/inpicture_slide/sejumlah-peserta-menari-secara-kolosal-di-depan-tugu-kujang_220620173758-827.jpg",
				reverse: true,
				title: "Kawasan Tugu Kujang Bogor",
				desc: "Kawasan Tugu Kujang di Bogor adalah sebuah tempat yang menggabungkan keindahan alam, sejarah, dan budaya yang kaya. Pusat perhatian di kawasan ini adalah Bundaran Tugu Kujang yang mengagumkan, dengan patung kujang yang menjadi simbol budaya Sunda yang mendalam. Tugu ini bukan hanya sebuah monumen, tetapi juga titik pertemuan bagi warga setempat dan wisatawan yang ingin merasakan pesona Bogor. Tugu Kujang dikelilingi oleh taman yang hijau dan terawat dengan baik, menciptakan lingkungan yang nyaman untuk bersantai, berjalan-jalan, atau bahkan piknik bersama keluarga. Selain itu, di sekitar kawasan ini terdapat makam yang konon merupakan makam Pangeran Kornel, menyiratkan keberadaan sejarah yang mendalam.",
			},
			{
				image:
					"https://miro.medium.com/v2/resize:fit:1400/1*IymrgzbXR9j7TCqT3GSLNg.png",
				reverse: false,
				title: "Augmentasi Realitas Berbasis Lokasi",
				desc: "Augmentasi Realitas Berbasis Lokasi adalah teknologi yang menggabungkan informasi digital dengan lingkungan fisik di sekitar pengguna menggunakan perangkat berbasis lokasi seperti smartphone atau kacamata pintar. Ini memungkinkan pengguna untuk melihat dan berinteraksi dengan objek-objek digital yang disisipkan ke dalam dunia nyata mereka, berdasarkan data lokasi mereka. Teknologi Augmentasi Realitas Berbasis Lokasi memanfaatkan sensor GPS atau sensor lainnya pada perangkat pengguna untuk menentukan posisi dan orientasi mereka dalam dunia nyata. Kemudian, dengan bantuan kamera perangkat tersebut, objek-objek virtual, seperti label, petunjuk arah, atau informasi tambahan, dapat ditampilkan dalam tampilan pengguna secara real-time sesuai dengan lokasi dan sudut pandang mereka.",
			},
		],
	},
	infowisata: {
		data: [
			// {
			// 	poster:
			// 		"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1079,h_690/w_66,x_12,y_12,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mey1ee2nmi7khfynyy7v/TiketMasukKebunRayaBogor.webp",
			// 	slug: "kebun-raya-bogor",
			// 	nama: "Kebun Raya Bogor",
			// 	alamat: "Kec. Bogor Tengah",
			// 	desc:
			// 		"Kebun Raya Bogor, terletak di Bogor, Indonesia, adalah taman botani yang luas dengan koleksi tumbuhan eksotis dan langka. Tempat ini populer di kalangan wisatawan dan berperan penting dalam pelestarian dan penelitian tumbuhan.",
			// 	ulasan: [
			// 		{
			// 			title: "Rizka Alifah",
			// 			desc: `Adem, teduh, pepohonan masih rindang, cuma banyak police line karena ada banyak pohon tuaa. Air di toiletnya dingin banget. Penunjuk jalannya masih kurang banyak menurutku, semoga nanti lebih di perbanyak dan diperjelas lagi. Apalagi utk pintu exit pejalan kaki. Terima kasih.`,
			// 			nilai: 4,
			// 		},
			// 		{
			// 			title: "Diah Niken",
			// 			desc:
			// 				"Hutan kota yang sangat terawat, dengan koleksi pepohonan yang sangat lengkap, tempat yang sangat nyaman untuk piknik bersama keluarga, berwisata, ataupun berolahraga. Di dalam kebun raya ada restaurant yang indah dengan menu menu yang memanjakan lidah. Kalau kita berputar, tampak pula istana Bogor indah, dengan koleksi hewan rusa nya😍😍😍",
			// 			nilai: 5,
			// 		},
			// 		{
			// 			title: "Irfan Sasangko",
			// 			desc:
			// 				"Kondisi weekend... Terutama hari minggu cukup ramai, petugas kebersihannya cukup cekatan jika ada pengunjung yg dengan sengaja meninggalkan sampah di area piknik... 👍 …",
			// 			nilai: 5,
			// 		},
			// 		{
			// 			title: "Rika Agustina",
			// 			desc:
			// 				"adem rindang dan luas banget, jadi kalo mau keliling harus sewa skuter listrik atau lainnya biar makin seru dan ga cape jalan kaki, tapi pas mau sewa sekuter nya itu antri banget harus waiting list. untuk fasilitas musholah nya ada tapi wc nya kurang bersih.",
			// 			nilai: 5,
			// 		},
			// 	],
			// 	coor: [-6.5973624487061775, 106.79955906666069],
			// 	jamOprasional: [
			// 		{ hari: "Senin", jam: "08:00 - 16:00" },
			// 		{ hari: "Selasa", jam: "08:00 - 16:00" },
			// 		{ hari: "Rabu", jam: "08:00 - 16:00" },
			// 		{ hari: "Kamis", jam: "08:00 - 16:00" },
			// 		{ hari: "Jumat", jam: "08:00 - 16:00" },
			// 		{ hari: "Sabtu", jam: "08:00 - 16:00" },
			// 		{ hari: "Minggu", jam: "08:00 - 16:00" },
			// 	],
			// 	fasilitas: [
			// 		"toilet",
			// 		"trash",
			// 		"difable",
			// 		"greenhouse",
			// 		"mosque",
			// 		"foodcourt",
			// 	],
			// },
			{
				poster:
					"https://asset-2.tstatic.net/bogor/foto/bank/images/Kondisi-arus-lalu-lintas-Kota-Bogor-Minggu-152022.jpg",
				slug: "bds-tugu-kujang",
				nama: "BDS. Tugu Kujang",
				alamat: "Kec. Bogor Tengah, Kota Bogor",
				desc: "Bundaran Tugu Kujang adalah landmark di Kota Bogor, Jawa Barat, yang menampilkan patung kujang, senjata tradisional Sunda. Ini adalah simbol budaya dan kebanggaan daerah tersebut, sering digunakan untuk berfoto dan berkumpul.",
				ulasan: [
					{
						title: "Ridwan Tardini",
						desc: "Bagus !",
						nilai: 4,
					},
				],
				coor: [-6.601471714351664, 106.8048409815005],
			},
			{
				poster:
					"https://img.inews.co.id/media/1200/files/inews_new/2020/03/16/tugu_kujang1.jpg",
				slug: "tugu-kujang-bogor",
				nama: "Tugu Kujang Bogor",
				alamat: "Jl. Raya Pajajaran No. 1 A",
				desc: "Tugu Kujang Bogor adalah landmark yang ikonik dan merupakan lambang kebanggaan kota Bogor, Jawa Barat, dengan patung kujang yang memiliki bentuk mirip sabit dengan ujung yang melengkung. Tugu ini menjadi tempat populer untuk berfoto dan menggambarkan warisan budaya Sunda yang kaya.",
				ulasan: [
					{
						title: "M. Al Durra",
						desc: "Lokasi yang bagus untuk jalan jalan biasa ataupun joging, sangat strategis di tengah kota Bogor, banyak kendaraan terkadang suka macet, dekat sekali dengan kebun raya Bogor, view nya juga bagus bagus, asri, adem, ga terlalu panas karena banyak pepohonan dan banyak jajanan serta makanan ringan. Bagi warga luar kota Bogor wajib banget sih kesini cobain deh rasanya mantap.",
						nilai: 2,
					},
					{
						title: "Erick",
						desc: "Lokasi yang bagus untuk jalan jalan biasa ataupun joging, sangat strategis di tengah kota Bogor, banyak kendaraan terkadang suka macet, dekat sekali dengan kebun raya Bogor, view nya juga bagus bagus, asri, adem, ga terlalu panas karena banyak pepohonan dan banyak jajanan serta makanan ringan. Bagi warga luar kota Bogor wajib banget sih kesini cobain deh rasanya mantap.",
						nilai: 3,
					},
					{
						title: "t wink",
						desc: "Kok gak ada bosannya ya😊😁😄 Tiap bersepeda ke area Bogor diusahakan mampir ke mari trus foto dekh, bahkan digunakan sebagai area titik kumpul yang bersepeda",
						nilai: 3,
					},
					{
						title: "tEwok",
						desc: "Bosan kesini",
						nilai: 2,
					},
				],
				coor: [-6.601180586224578, 106.80509525758612],
			},
			// {
			// 	poster:
			// 		"https://asset-2.tstatic.net/bogor/foto/bank/images/boker-tetap-menyala.jpg",
			// 	slug: "mall-botani-square",
			// 	nama: "Mall Botani Square",
			// 	alamat: "Jl. Raya Pajajaran No.40",
			// 	desc:
			// 		"Mall Botani Square adalah pusat perbelanjaan yang terletak di Kota Bogor, Jawa Barat, Indonesia. Mall ini menawarkan berbagai toko, restoran, dan pusat hiburan untuk pengunjungnya. Selain itu, Botani Square juga dikenal karena berlokasi dekat dengan Kebun Raya Bogor, sehingga sering menjadi destinasi populer bagi wisatawan yang mengunjungi kota ini.",
			// 	ulasan: [
			// 		{
			// 			title: "Ulasan Pertama",
			// 			desc:
			// 				"Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			// 			nilai: 3,
			// 		},
			// 		{
			// 			title: "Ulasan Kedua",
			// 			desc:
			// 				"Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			// 			nilai: 5,
			// 		},
			// 		{
			// 			title: "Ulasan Ketiga",
			// 			desc:
			// 				"Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			// 			nilai: 2,
			// 		},
			// 	],
			// 	coor: [-6.601393740337289, 106.8068655154671],
			// 	jamOprasional: [
			// 		{ hari: "Senin", jam: "10:00 - 22:00" },
			// 		{ hari: "Selasa", jam: "10:00 - 22:00" },
			// 		{ hari: "Rabu", jam: "10:00 - 22:00" },
			// 		{ hari: "Kamis", jam: "10:00 - 22:00" },
			// 		{ hari: "Jumat", jam: "10:00 - 22:00" },
			// 		{ hari: "Sabtu", jam: "10:00 - 22:00" },
			// 		{ hari: "Minggu", jam: "10:00 - 22:00" },
			// 	],
			// 	fasilitas: [
			// 		"toilet",
			// 		"trash",
			// 		"difable",
			// 		"greenhouse",
			// 		"mosque",
			// 		"foodcourt",
			// 	],
			// },
			{
				poster:
					"https://firebasestorage.googleapis.com/v0/b/krmos-visitor-sandbox.appspot.com/o/region%2Fbogor%2Fmuseum%2Fzoologi%2FMuseum%20Zoologi%20-4.jpg?alt=media&token=4f7898f2-80f6-411f-b58d-bab3c5730bdb",
				slug: "museum-zoologi",
				nama: "Museum Zoologi",
				alamat: "Jl. Ir. H. Juanda No.9",
				desc: "Museum Zoologi adalah institusi yang berfokus pada koleksi, penelitian, dan pameran berbagai spesimen hewan. Museum ini memungkinkan pengunjung untuk memahami dan menghargai keanekaragaman hayati dunia, dengan menampilkan spesimen kulit, tengkorak, tulang, serta pameran interaktif tentang perilaku dan lingkungan hewan. Museum Zoologi seringkali berperan penting dalam penelitian ilmiah, pendidikan, dan pelestarian satwa liar.",
				ulasan: [
					{
						title: "Ulasan Pertama",
						desc: "Deskripsi ulasan pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 4,
					},
					{
						title: "Ulasan Kedua",
						desc: "Deskripsi ulasan kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 3,
					},
					{
						title: "Ulasan Ketiga",
						desc: "Deskripsi ulasan ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						nilai: 1,
					},
				],
				coor: [-6.603352955847817, 106.79687601719206],
				jamOprasional: [
					{ hari: "Senin", jam: "08:00 - 15:00" },
					{ hari: "Selasa", jam: "08:00 - 15:00" },
					{ hari: "Rabu", jam: "08:00 - 15:00" },
					{ hari: "Kamis", jam: "08:00 - 15:00" },
					{ hari: "Jumat", jam: "08:00 - 15:00" },
					{ hari: "Sabtu", jam: "08:00 - 15:00" },
					{ hari: "Minggu", jam: "08:00 - 15:00" },
				],
				fasilitas: [
					"toilet",
					"trash",
					"difable",
					"greenhouse",
					"mosque",
					"foodcourt",
				],
			},
		],
	},
	galeriPhotos: [
		{
			src: "https://i.pinimg.com/736x/5c/c1/26/5cc12649b0c266a5d050d92e2185486e.jpg",
			width: 300,
			height: 400,
		},
		{
			src: "https://picsum.photos/seed/mount/700/900.webp",
			width: 700,
			height: 900,
		},
		{
			src: "https://picsum.photos/seed/hils/500/200.webp",
			width: 500,
			height: 200,
		},
		{
			src: "https://picsum.photos/seed/a/300/400.webp",
			width: 300,
			height: 400,
		},
		{
			src: "https://picsum.photos/seed/animals/300/400.webp",
			width: 300,
			height: 400,
		},
		{
			src: "https://picsum.photos/seed/people/200/200.webp",
			width: 200,
			height: 200,
		},
		{
			src: "https://picsum.photos/seed/sky/300/400.webp",
			width: 300,
			height: 400,
		},
		{
			src: "https://picsum.photos/seed/social/700/900.webp",
			width: 700,
			height: 900,
		},
		{
			src: "https://picsum.photos/seed/random/500/200.webp",
			width: 500,
			height: 200,
		},
		{
			src: "https://picsum.photos/seed/faku/300/400.webp",
			width: 300,
			height: 400,
		},
		{
			src: "https://picsum.photos/seed/dontcare/200/200.webp",
			width: 200,
			height: 200,
		},
		{
			type: "video",
			width: 1280,
			height: 720,
			src: "https://picsum.photos/seed/thumbnail/500/200.webp",
			poster: "https://picsum.photos/seed/thumbnail/500/200.webp",
			sources: [
				{
					src: "https://media.istockphoto.com/id/483314987/id/video/desain-teks-abstrak.mp4?s=mp4-640x640-is&k=20&c=dZ_RC4E_q4pdWnmK01OvETzf_dbvW0-Bv8J9Xifq3tE=",
					type: "video/mp4",
				},
			],
		},
	],
	aboutme: {
		data: [
			{
				jabatan: "Mahasiswa Ajar",
				nama: "Budi Santoso",
				jabatan2: "Mahasiswa Tingkat Akhri",
				deskripsi:
					"Saya adalah seorang mahasiswa bersemangat dengan minat dalam teknologi dan khususnya dalam augmented reality (AR). Dia adalah individu kreatif yang sering menciptakan proyek-proyek AR, aktif dalam komunitas mahasiswa terkait AR, dan memiliki pemahaman dalam pemrograman dan desain grafis. Saya berharap menggabungkan minatnya dalam AR dengan pendidikan formalnya untuk menciptakan solusi AR yang inovatif.",
				pengalaman: [
					"Desainer Grafis - Epsilon Creative Studio (Agustus 2020 - Juni 2022)",
				],
				reverseLayout: false,
				ae: "tr",
				dataImage: {
					source: "https://randomuser.me/api/portraits/men/10.jpg",
					thumb: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
					alt: "foto profil dosen pembimbing 1",
					accentElement: "tr",
					quote: "Berani Mencoba, Bijak Bertindak",
				},
			},
			{
				jabatan: "Dosen Pembimbing 1",
				nama: "Dr. Ir. Budi Raharja, S. Kom., M. Kom.",
				jabatan2: "Kaprodi",
				deskripsi:
					"Dr. Budi Raharja adalah seorang dosen pembimbing yang memiliki gelar doktor dan magister dalam bidang Teknik Informatika. Beliau memiliki pengalaman luas dalam penelitian dan pengembangan perangkat lunak, serta telah mengawasi banyak tesis dan proyek penelitian mahasiswa.",
				pengalaman: [
					"Spesialis Pemasaran Digital - Alpha Marketing Agency (Juli 2019 - Maret 2021)",
					"Insinyur Perangkat Lunak Junior - Beta Software Solutions (Oktober 2020 - Desember 2022)",
					"Analis Keuangan Junior - Delta Financial Services (Maret 2019 - Februari 2021)",
				],
				reverseLayout: true,
				ae: "tl",
				dataImage: {
					source: "https://randomuser.me/api/portraits/men/20.jpg",
					thumb: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
					alt: "foto profil dosen pembimbing 1",
					accentElement: "tl",
					quote: "Terus Belajar, Terus Berkembang",
				},
			},
			{
				jabatan: "Dosen Pembimbing 2",
				nama: "Prof. Dr. Tek. Informatika Siti Wulandari, S. Kom., M. Kom.",
				jabatan2: "Kaprodi",
				deskripsi:
					"Prof. Dr. Siti Wulandari adalah seorang dosen pembimbing yang berpengalaman dengan gelar profesor di bidang Teknik Informatika. Selama karirnya, beliau telah menjadi pembimbing bagi banyak mahasiswa yang sukses dalam penelitian mereka di berbagai aspek komputer dan teknologi informasi.",
				pengalaman: [
					"Spesialis Pemasaran Digital - Alpha Marketing Agency (Juli 2019 - Maret 2021)",
					"Insinyur Perangkat Lunak Junior - Beta Software Solutions (Oktober 2020 - Desember 2022)",
					"Analis Keuangan Junior - Delta Financial Services (Maret 2019 - Februari 2021)",
					"Manajer Proyek - Gamma Construction Group (Januari 2018 - November 2020)",
					"Desainer Grafis - Epsilon Creative Studio (Agustus 2020 - Juni 2022)",
				],
				reverseLayout: false,
				ae: "tr",
				dataImage: {
					source: "https://randomuser.me/api/portraits/women/7.jpg",
					thumb: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
					alt: "foto profil dosen pembimbing 2",
					accentElement: "tr",
					quote: "Ciptakan Kebaikan Setiap Hari:",
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
		copyrightLabel: `Copyright ${new Date().getFullYear()} @ ARLB Project, All Right Reserved`,
	},
};
export default CONTENT;
