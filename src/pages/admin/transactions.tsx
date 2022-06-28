import AdminTransaction from "lib/components/Utilities/AdminTransaction";
import { returnUserData } from "lib/components/Utilities/UserData";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";

function transactions({ data }: any) {
	return <AdminTransaction data={data} />;
}

export default transactions;

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
	let { url, search } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=8&offset=0&";
	}
	url = url ?? "limit=8&offset=0&";

	if (search) {
		url = `${url}search=${search}`;
	}
	try {
		const data = (await _dataAccess.get(`/api/Admin/transactions/list?${url}`))
			.data;

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
