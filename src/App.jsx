import { Routes, Route, useLocation } from "react-router-dom";
import Beranda from "./pages/beranda";
import InfoWisata from "./pages/infoWisata";
import Galeri from "./pages/galeri";
import TentangKami from "./pages/tentangKami";
import InfoWisataDetail from "./pages/infoWisataDetail";
import { useEffect } from "react";
function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ behavior: "smooth", top: 0 });
	}, [pathname]);

	return (
		<Routes>
			<Route path="/" element={<Beranda />} />
			<Route path="/info-wisata" element={<InfoWisata />} />
			<Route path="/galeri" element={<Galeri />} />
			<Route path="/tentang-kami" element={<TentangKami />} />
			<Route path="/info-wisata/:slug" element={<InfoWisataDetail />} />
		</Routes>
	);
}

export default App;
