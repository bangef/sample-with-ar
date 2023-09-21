import { useEffect } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import CONTENT from "../utils/content";
import GallerySection from "../components/GallerySection";

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
