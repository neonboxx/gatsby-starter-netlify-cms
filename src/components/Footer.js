import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="bb-footer">
				<div className="container text-center">
					<div className="bb-grid lg">
						<div className="column column-4">Map</div>
						<div className="column column-8">
							<div className="row bb-grid">
								<div className="column column-4">Contact</div>
								<div className="column column-4">Explore</div>
								<div className="column column-4">Treatments</div>
							</div>
							<div className="row">Logos</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
