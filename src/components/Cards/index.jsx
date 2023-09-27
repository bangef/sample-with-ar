import CONTENT from "../../utils/content";
import Card from "../Card";

const Cards = () => {
	return (
		<div className="w-full bg-primary150 md:py-[100px] ">
			<div className="w-full max-w-3xl p-4 m-auto">
				<div className="mb-4">
					<h1 className="font-bold text-white text-md font-poppins sm:text-xl md:text-2xl">
						{CONTENT.infowisata.data.length} tempat di Kawasan Tugu Kujang, Bogor.
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{CONTENT.infowisata.data.map((e, i) => (
						<Card dataWisata={e} key={`${i}-${e.slug}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards;
