import { useEffect } from "react";
import Banner from "../components/Banner";
import BerandaArSection from "../components/BerandaArSection";
import BerandaSection from "../components/BerandaSection";
import Layout from "../components/Layout";
import CONTENT from "../utils/content";

function Beranda() {
	useEffect(() => {
		document.title = `${CONTENT.title} | Beranda`;
	}, []);
	return (
		<Layout>
			<BerandaSection dataContent={{ reverse: true }} />
			<BerandaSection
				dataContent={{ reverse: false }}
				className="overflow-x-hidden bg-primary150"
			/>
			<BerandaArSection />
			<Banner />
		</Layout>
	);
}

export default Beranda;
