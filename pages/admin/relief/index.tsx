import { GetServerSideProps } from "next";

function Reliefs() {
	return <>Reliefs</>;
}

export default Reliefs;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/relief/requests",
		},
		props: {},
	};
};
