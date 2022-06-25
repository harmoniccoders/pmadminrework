import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { DataAccess } from "lib/Utils/Api";

export default function UserIndex() {
	return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.query;
	console.log({ id });

	const bearer = `Bearer ${ctx.req.cookies.token}`;
	const _dataAccess = new DataAccess(bearer);
	let { url, search } = ctx.query;
	if (url == "" || undefined || null) {
		url = `${id}limit=14&offset=0&`;
	}
	url = url ?? `${id}limit=14&offset=0&`;
	console.log(url);

	let users;
	let pageData;
	try {
		const data = (await _dataAccess.get(`/api/User/list?${url}`)).data;
		users = data.value;
		pageData = data;
	} catch (error) {}

	if (!id) {
		const firstUser = users[0];
		return {
			redirect: {
				permanent: false,
				destination: `/admin/users/${firstUser.id}/profile`,
			},
		};
	}
	if (search) {
		url = `${url}search=${search}`;
	}
	try {
		return {
			props: {
				pageData,
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
