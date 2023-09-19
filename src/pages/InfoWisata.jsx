import { useEffect } from "react";
import Layout from "../components/layout";
import CONTENT from "../utils/content";

function InfoWisata() {
	useEffect(() => {
		document.title = `${CONTENT.title} | Info Wisata`;
	}, []);
	return (
		<Layout>
			<h1 className="text-2xl text-white font-poppins">
				Main Content | Info Wisata
			</h1>
		</Layout>
	);
}

export default InfoWisata;
