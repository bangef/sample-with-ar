import { useEffect } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SubHeader from "../components/subHeader";
import CONTENT from "../utils/content";
import GallerySection from "../components/gallerySection";

export default function Galeri() {
	useEffect(() => {
		document.title = `${CONTENT.title} | Galeri`;
	}, []);
	return (
		<Layout>
			<SubHeader menu="Galeri" />
			<GallerySection />
			<Banner />
		</Layout>
	);
}
