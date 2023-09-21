import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { tw } from "../../utils/common";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import MarkerIcon from "../../assets/user.png";

const DetailInfoWisataMaps = (props) => {
	const BASEURL = props.coor
		? `http://maps.google.co.uk/maps?q=${props.coor.join(",")}`
		: `http://maps.google.co.uk/maps?q=-6.587001443737411,106.79703730172423`;
	return (
		<Link
			to={BASEURL}
			target="_blank"
			className={tw("w-full h-[200px] rounded-lg block", props.className)}
		>
			<div className="mb-4">
				<h1 className="text-2xl font-bold text-center text-white sm:text-3xl">
					Peta Alamat
				</h1>
			</div>
			{props.coor && (
				<MapContainer
					center={props.coor}
					zoom={17}
					scrollWheelZoom={false}
					className="w-full h-full m-auto rounded-lg"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={props.coor}
						icon={L.icon({
							iconUrl: MarkerIcon,
							iconSize: [50, 50],
							iconAnchor: [50 / 2, 50 + 9],
						})}
					></Marker>
				</MapContainer>
			)}
		</Link>
	);
};

DetailInfoWisataMaps.propTypes = {
	className: PropTypes.string,
	coor: PropTypes.array,
};

// DetailInfoWisataMaps.defaultProps = {
// 	coor: [-6.587001443737411, 106.79703730172423],
// };

export default DetailInfoWisataMaps;
