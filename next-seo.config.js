/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	title: "Liquede",
	titleTemplate: "%s | Save",
	defaultTitle: "Liquede",
	description: "Save",
	canonical: "https://liquede.com",
	openGraph: {
		url: "https://liquede.com",
		title: "Liquede",
		description: "Save",
		images: [
			{
				url: "/assets/logo.png",
				alt: "Liquede",
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
