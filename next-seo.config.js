/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	title: "PropertyMataaz",
	titleTemplate: "%s | Admin",
	defaultTitle: "PropertyMataaz",
	description: "Save",
	canonical: "https://PropertyMataaz.com",
	openGraph: {
		url: "https://PropertyMataaz.com",
		title: "Liquede",
		description: "Save",
		images: [
			{
				url: "/assets/fav.png",
				alt: "PropertyMataaz",
			},
		],
		site_name: "Liquede",
	},
	twitter: {
		handle: "@sozonome",
		cardType: "summary_large_image",
	},
};

export default defaultSEOConfig;
