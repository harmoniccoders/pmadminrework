import { returnUserData } from "lib/components/Utilities/UserData";
import EnquirySingle from "lib/components/Utils/InvestmentsTab/EnquirySingle";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";

function SingleEnquiry({ data }: any) {
	return <EnquirySingle data={data} />;
}

export default SingleEnquiry;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {
		data: { user, redirect },
	} = returnUserData(ctx);
	if (redirect)
		return {
			redirect: {
				permanent: false,
				destination: "/admin",
			},
			props: {},
		};
	const bearer = `Bearer ${ctx.req.cookies.token}`;
	const _dataAccess = new DataAccess(bearer);
	const { id } = ctx.query;

	try {
		const data = (await _dataAccess.get(`/api/Property/get/${id}`)).data;

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			props: {
				data: [],
			},
		};
	}
};
