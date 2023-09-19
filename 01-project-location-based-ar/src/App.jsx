import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import InfoWisata from "./pages/InfoWisata";
import Galeri from "./pages/Galeri";
import TentangKami from "./pages/TentangKami";

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
