import { useEffect } from "react";
import AboutMe from "../components/aboutMe";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SubHeader from "../components/subHeader";
import CONTENT from "../utils/content";

function TentangKami() {
	useEffect(() => {
		document.title = `${CONTENT.title} | Tentang Kami`;
	}, []);
	return (
		<Layout>
			<SubHeader menu="Tentang Kami" />
			{CONTENT.aboutme.data.map((e, i) => (
				<AboutMe
					key={`${i}-${e.ae}`}
					content={e}
					reverseLayout={e.reverseLayout}
					accentElements={e.ae}
					dataImage={e.dataImage}
				/>
			))}
			<Banner />
		</Layout>
	);
}

export default TentangKami;
