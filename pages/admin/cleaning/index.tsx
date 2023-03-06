import { GetServerSideProps } from "next";

function Sessions() {
	return <>Index</>;
}

export default Sessions;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/cleaning/sessions",
		},
		props: {},
	};
};
