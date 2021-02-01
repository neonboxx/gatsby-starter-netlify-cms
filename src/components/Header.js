import React from 'react';
import { Link } from 'gatsby';

const header = ({ title, body, ctaText, promo }) => (
	<div className="container full-x">
		<div className="bb-grid lg">
			<div className="column column-6 column-offset-2">
				<h3>{title}</h3>
				<p>{body}</p>
				<button>{ctaText}</button>
			</div>
			{promo && (
				<div className="column column-4 column-offset-2">
					<div className="bb-card">
						<header className="header">
							<p className="header-title text-xl">Promo</p>
						</header>
						<div className="content">
							<h3>{promo.title}</h3>
							<p>{promo.body}</p>
						</div>
						<div className="footer">
							<Link className="item" to="/contact">
								{promo.ctaText}
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	</div>
);

export default header;
