import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import ContentBlock from '../components/ContentBlock';

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
				backgroundSize: 'cover',
			}}
		>
			<div className="head">
				<Navbar />
			</div>
			<div className="body">
				<Header
					title="Animal wellness for the long run"
					body="Sun Hill Farm Veterinary Physiotherapy provides canine and equine
				physiotherapy for animals who are recovering from injury or surgery,
				and also general health and wellness."
					ctaText="Explore services & treaments"
					promo={{
						title: '£100 for 3 sessions',
						body: 'Equine rehabilitation therapy session introductory offer',
						ctaText: 'Contact Us',
					}}
				></Header>
			</div>
		</div>
		<div className="container">
			<ContentBlock
				image={image}
				title="Spotting signs of injury"
				body="There are many conditions that can benefit from physiotherapy. The
			first step is identifying signs of these conditions or injuries.
			Use our guide to learn more about these signs."
				ctaText="Signs of injury"
			/>
			<ContentBlock
				image={image}
				title="We Strive to be a Home From Home"
				body="With long term health and wellbeing remaining at the forefront
				of everything we do, Sun Hill Farm Veterinary Physiotherapy is
				a place where care and compassion comes first and where
				results are for the long-run."
				ctaText="Abuot us"
			/>
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
