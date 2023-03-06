import { GetServerSideProps } from "next";

function Listings() {
	return <>Listings</>;
}

export default Listings;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/listings/enquires",
		},
		props: {},
	};
};
