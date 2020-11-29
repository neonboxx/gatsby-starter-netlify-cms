import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/img/logo.svg';
import { useState } from 'react';
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="container">
			<nav className="bb-navbar">
				<div className="brand">
					<a className="item" href="#">
						<div className="logo">
							<Logo></Logo>
						</div>
					</a>
					<div className="toggle" onClick={() => setShowMenu(!showMenu)}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
				</div>
				<div className={`items  ${showMenu && 'active'}`}>
					<div className="right">
						<Link className="item" to="/blog">
							Our Services
						</Link>
						<Link className="item" to="/contact">
							Facilities
						</Link>
						<Link className="item" to="/contact/examples">
							Signs of Injury
						</Link>
						<Link className="item" to="/about">
							About Us
						</Link>
						<div className="item">
							<a className="bb-btn secondary outline">Contact Us</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
