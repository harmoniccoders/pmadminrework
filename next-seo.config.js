/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "PropertyMataaz",
  titleTemplate: "%s | Admin",
  defaultTitle: "PropertyMataaz",
  description: "Own a property",
  canonical: "https://PropertyMataaz.com",
  openGraph: {
    url: "https://PropertyMataaz.com",
    title: "PropertyMataaz",
    description: "Own a property",
    images: [
      {
        url: "/assets/fav.png",
        alt: "PropertyMataaz",
      },
    ],
    site_name: "PropertyMataaz",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
