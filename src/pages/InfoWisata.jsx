import { useEffect } from "react";
import Layout from "../components/Layout";
import CONTENT from "../utils/content";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import SubHeader from "../components/SubHeader";

function InfoWisata() {
	useEffect(() => {
		document.title = `${CONTENT.title} | Info Wisata`;
	}, []);
	return (
		<Layout>
			<SubHeader menu="Info Wisata" />
			<Cards />
			<Banner />
		</Layout>
	);
}

export default InfoWisata;
