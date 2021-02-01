import React from 'react';
import { Link } from 'gatsby';

const contentBlock = ({ image, title, body, ctaText }) => (
	<div className="container full-x content-block">
		<div className="bb-grid lg">
			<div
				className="column column-6"
				style={{
					backgroundImage: `url(${
						!!image.childImageSharp ? image.childImageSharp.fluid.src : image
					})`,
					backgroundPosition: `center center`,
					backgroundSize: 'cover',
				}}
			></div>
			<div className="column column-8">
				<article>
					<div className="content">
						<h4>{title}</h4>
						<p>{body}</p>
					</div>
					<div className="footer">
						<Link className="item" to="/contact">
							{ctaText}
						</Link>
					</div>
				</article>
			</div>
		</div>
	</div>
);

export default contentBlock;
