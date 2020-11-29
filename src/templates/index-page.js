import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import Logo from '../../static/img/logo.svg';
import Navbar from '../components/Navbar';

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
}) => (
	<section>
		<div
			className="hero primary"
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: `center center`,
				backgroundAttachment: `fixed`,
				backgroundSize: 'cover',
			}}
		>
			<div className="head">
				<Navbar />
			</div>
			<div className="body">
				<div className="container full-x">
					<div className="bb-grid lg">
						<div className="column column-6 column-offset-2">
							<h3>Animal wellness for the long run</h3>
						</div>
						<div className="column column-6 column-offset-2">
							<div className="bb-card">
								<header className="header">
									<p className="header-title text-xl">Promo</p>
								</header>
								<div className="content">
									<h3>£100 for 3 sessions</h3>
									<p>
										Equine rehabilitation therapy session introductory offer
									</p>
								</div>
								<div className="footer">
									<Link className="item" to="/contact">
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tail">
				<div className="container">
					<div className="bb-grid lg m-0"></div>
				</div>
			</div>
		</div>
	</section>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
