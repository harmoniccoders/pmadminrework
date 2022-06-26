import { GetServerSideProps } from "next";

function admin() {
	return <>Nothing Here</>;
}

export default admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/admin/profile",
		},
		props: {},
	};
};
