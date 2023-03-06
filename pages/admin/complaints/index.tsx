import { GetServerSideProps } from "next";

export default function Complaints() {
	return <>Rent</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		redirect: {
			permanent: false,
			destination: "/admin/complaints/complaints",
		},
		props: {},
	};
};
