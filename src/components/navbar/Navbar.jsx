import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
		<nav className="top-nav">
			<ul className="menu">
				<li>
					<Link to="/movies-catalog/">home</Link>
				</li>
				<li>
					<Link to="/movies-catalog/about">about</Link>
				</li>
				<li>
					<Link to="/movies-catalog/contacts">contacts</Link>
				</li>
			</ul>
  	</nav>
	)
};

export default Navbar;
