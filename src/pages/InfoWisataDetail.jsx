import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CONTENT from "../utils/content";
import Banner from "../components/Banner";
import SubHeader from "../components/SubHeader";
import { useParams } from "react-router-dom";
import DetailInfoWisata from "../components/DetailInfoWisata";

function InfoWisataDetail() {
	const [data, setData] = useState({});
	const { slug } = useParams();
	// getData in local data
	const getDataBySlug = () => {
		const result = CONTENT.infowisata.data.find((e) => e.slug === slug);
		setData((data) => ({ ...data, ...result }));
	};

	useEffect(() => {
		getDataBySlug();
		document.title = `${CONTENT.title} | Info Wisata Detail - ${data.nama}`;
	}, []);

	return (
		<Layout>
			<SubHeader menu={data.nama} bg={data.poster} />
			<DetailInfoWisata dataDetail={data} />
			<Banner />
		</Layout>
	);
}

export default InfoWisataDetail;
