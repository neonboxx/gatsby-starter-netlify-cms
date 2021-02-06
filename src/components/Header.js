import React from 'react';
import { Link } from 'gatsby';

const header = ({ title, body, cta, promo }) => (
	<div className="container full-x">
		<div className="bb-grid lg">
			<div className="column column-6 column-offset-2">
				<h3>{title}</h3>
				<p>{body}</p>
				<Link to={cta.link} >{cta.text}</Link>
			</div>
			{promo && (
				<div className="column column-4 column-offset-2">
					<div className="bb-card">
						<header className="header">
							<p className="header-title text-xl">{promo.title}</p>
						</header>
						<div className="content">
							<h3 className="text-primary">{promo.header}</h3>
							<p className="text-primary">{promo.body}</p>
						</div>
						<div className="footer">
							<Link className="item" to={promo.cta.link}>
								{promo.cta.text}
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	</div>
);

export default header;
