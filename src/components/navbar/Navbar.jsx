import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
		<nav className="top-nav">
			<ul className="menu">
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/contacts">contacts</Link>
				</li>
			</ul>
  	</nav>
	)
};

export default Navbar;
