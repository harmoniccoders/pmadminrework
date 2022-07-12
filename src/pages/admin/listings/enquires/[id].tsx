import { returnUserData } from "lib/components/Utilities/UserData";
import EnquirySingle from "lib/components/Utils/InvestmentsTab/EnquirySingle";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";

function SingleEnquiry({ data, id }: any) {
	console.log({ data });

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
	const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
	const _dataAccess = new DataAccess(bearer);
	let { id } = ctx.query;
	try {
		const data = (await _dataAccess.get(`/api/Admin/enquiries/get/${id}`)).data;

		return {
			props: {
				data,
				id,
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
