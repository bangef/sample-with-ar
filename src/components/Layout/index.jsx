import Header from "../Header";
import { PropTypes } from "prop-types";
import Footer from "../footer";

function Layout({ children }) {
	return (
		<div className="w-full bg-gradient-to-r from-slate-900 to-slate-700">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.array,
};
export default Layout;
