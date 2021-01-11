import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.scss';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
	const { title, description, siteUrl } = useSiteMetadata();
	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix('/')}img/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>
				<meta name="theme-color" content="#fff" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${siteUrl}${withPrefix(
						'/'
					)}img/shf-veterinary-physiotherapy-social-assets-cover-photo-2.jpg`}
				/>
			</Helmet>
			<main>
				{children}

				<Footer></Footer>
			</main>
		</>
	);
};

export default TemplateWrapper;
