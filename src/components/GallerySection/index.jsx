import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import CONTENT from "../../utils/content";

const GallerySection = () => {
	const [index, setIndex] = useState(-1);
	const PHOTOS = CONTENT.galeriPhotos;

	return (
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
	);
};

export default GallerySection;
