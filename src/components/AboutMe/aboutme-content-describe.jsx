/* eslint-disable no-mixed-spaces-and-tabs */
import { PropTypes } from "prop-types";

const AboutmeContentDescribe = (props) => (
	<div className="sm:w-1/2">
		<p className="mb-2 text-sm font-thin text-white">
			{props.content.jabatan || `label_jabatan`}
		</p>
		<h1 className="mb-2 text-5xl font-bold text-white">
			{props.content.nama || "label_nama"}
		</h1>
		<p className="mb-2 text-2xl font-thin text-secondary50">
			{props.content.jabatan2 || "label_jabatan_2"}
		</p>
		<p className="mb-2 text-base font-thin text-white">
			{props.content.deskripsi || "label_deskripsi"}
		</p>
		<ul className="text-base font-semibold text-white list-image-checkmark ps-5">
			{props.content.pengalaman
				? props.content.pengalaman.map((e, i) => {
						return <li key={`${i}-${e.substring(1, 3)}`}>{e}</li>;
				  })
				: ["label_reward_1", "label_reward_2"].map((e, i) => {
						return <li key={`${i}-${e.substring(1, 3)}`}>{e}</li>;
				  })}
		</ul>
	</div>
);

AboutmeContentDescribe.propTypes = {
	content: PropTypes.object,
};

export default AboutmeContentDescribe;
