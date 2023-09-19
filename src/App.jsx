import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/beranda";
import InfoWisata from "./pages/infoWisata";
import Galeri from "./pages/galeri";
import TentangKami from "./pages/tentangKami";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/info-wisata" element={<InfoWisata />} />
				<Route path="/galeri" element={<Galeri />} />
				<Route path="/tentang-kami" element={<TentangKami />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
