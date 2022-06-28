import { returnUserData } from "lib/components/Utilities/UserData";
import EnquirySingle from "lib/components/Utils/InvestmentsTab/EnquirySingle";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";

function SingleEnquiry({ data, id }: any) {
	const result = data.value.filter((x: any) => x.id == id)[0];
	return <EnquirySingle data={result} />;
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
	let { url, id } = ctx.query;
	url = url ?? "limit=8&offset=0&";
	try {
		const data = (await _dataAccess.get(`/api/Admin/enquiries/list?${url}`))
			.data;

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
