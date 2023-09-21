import { useEffect } from "react";
import Layout from "../components/layout";
import CONTENT from "../utils/content";
import Banner from "../components/banner";
import Cards from "../components/cards";
import SubHeader from "../components/subHeader";

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
