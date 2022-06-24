import { GetServerSideProps } from "next";

function Rent() {
	return <>Rent</>;
}

export default Rent;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/rent/applications",
		},
		props: {},
	};
};
