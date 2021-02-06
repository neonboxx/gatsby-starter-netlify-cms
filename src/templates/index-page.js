import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import ContentBlock from '../components/ContentBlock';

export const IndexPageTemplate = ({
	image,
	promo,
	heading,
	cta,
	description,
	articles
}) => (
	<section>
		<div
			className="hero primary"
			style={{
				backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
					})`,
				backgroundPosition: `center center`,
				backgroundSize: 'cover',
			}}
		>
			<div className="head">
				<Navbar />
			</div>
			<div className="body">
				<Header
					title={heading}
					promo={promo}
					body={description}
					cta={cta}
					promo={promo}
				></Header>
			</div>
		</div>
		<div className="container">
			{articles.map((article) => <ContentBlock
				image={article.image}
				title={article.title}
				body={article.body}
				ctaText={article.cta.text}
				ctaLink={article.cta.link}
			/>)}
		</div>
		<div className="container full-x content-block">
			<div className="bb-grid md justify-content-center">
				<div className="column column-3">
					<div className="bb-card">
						<div className="image">
							<figure>
								<img src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image }`} alt="" />
							</figure>
						</div>
						<div className="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Phasellus nec iaculis mauris.
						</div>	
					</div>
				</div>
				<div className="column column-3">
					<div className="bb-card">
						<div className="image">
							<figure>
								<img src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image }`} alt="" />
							</figure>
						</div>
						<div className="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Phasellus nec iaculis mauris.
						</div>	
					</div>
				</div>
				<div className="column column-3">
					<div className="bb-card">
						<div className="image">
							<figure>
								<img src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image }`} alt="" />
							</figure>
						</div>
						<div className="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Phasellus nec iaculis mauris.
						</div>	
					</div>
				</div>
			</div>
		</div>
	</section>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	promo: PropTypes.object,
	heading: PropTypes.string,
	description: PropTypes.string,
	articles: PropTypes.array,
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				cta={frontmatter.cta}
				promo={frontmatter.promo}
				description={frontmatter.description}
				articles={frontmatter.articles}
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
				cta {
					text
					link
				}
				description
				promo { 
					title
  					header
  					body
  					cta {
						text
						link
					}
				}
				articles {
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
					title
					body
					cta {
						link
						text
					}
				}
			}
		}
	}
`;
