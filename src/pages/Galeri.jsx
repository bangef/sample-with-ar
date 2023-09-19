import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SubHeader from "../components/subHeader";
import CONTENT from "../utils/content";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Galeri() {
	const [index, setIndex] = useState(-1);
	const PHOTOS = [
		{ src: "https://picsum.photos/300/400.webp", width: 300, height: 400 },
		{ src: "https://picsum.photos/700/900.webp", width: 700, height: 900 },
		{ src: "https://picsum.photos/500/200.webp", width: 500, height: 200 },
		{ src: "https://picsum.photos/300/400.webp", width: 300, height: 400 },
		{ src: "https://picsum.photos/300/400.webp", width: 300, height: 400 },
		{ src: "https://picsum.photos/200/200.webp", width: 200, height: 200 },
		{ src: "https://picsum.photos/300/400.webp", width: 300, height: 400 },
		{ src: "https://picsum.photos/700/900.webp", width: 700, height: 900 },
		{ src: "https://picsum.photos/500/200.webp", width: 500, height: 200 },
		{
			type: "video",
			width: 1280,
			height: 720,
			src: "https://picsum.photos/500/200.webp",
			poster: "https://picsum.photos/500/200.webp",
			sources: [
				{
					src: "https://media.istockphoto.com/id/483314987/id/video/desain-teks-abstrak.mp4?s=mp4-640x640-is&k=20&c=dZ_RC4E_q4pdWnmK01OvETzf_dbvW0-Bv8J9Xifq3tE=",
					type: "video/mp4",
				},
			],
		},
		{ src: "https://picsum.photos/300/400.webp", width: 300, height: 400 },
		{ src: "https://picsum.photos/200/200.webp", width: 200, height: 200 },
	];
	useEffect(() => {
		document.title = `${CONTENT.title} | Galeri`;
	}, []);
	return (
		<Layout>
			<SubHeader menu="Galeri" />
			<div className="px-4 sm:py-[100px] bg-primary150 py-4">
				<div className="max-w-3xl m-auto">
					<PhotoAlbum
						layout="rows"
						photos={PHOTOS}
						targetRowHeight={150}
						onClick={({ index }) => setIndex(index)}
					/>
					<Lightbox
						slides={PHOTOS}
						open={index >= 0}
						index={index}
						close={() => setIndex(-1)}
						plugins={[Fullscreen, Thumbnails, Video]}
					/>
				</div>
			</div>
			<Banner />
		</Layout>
	);
}
