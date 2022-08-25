import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { DataAccess } from "lib/Utils/Api";

export default function UserIndex() {
	return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.query;
	// console.log({ id });

	const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
	const _dataAccess = new DataAccess(bearer);
	let { url, offset, search,page } = ctx.query;
	// console.log({ url });
	// console.log({ offset });

	if (!url) {
		url = "";
	}
	if (url) {
		if (!offset) {
			url = `${url}`;
		}
		if (offset) {
			url = `${url}&offset=${offset[0]}`;
		}
	}
	if (search) {
		url = `${url ? `?url=${url}` : ""}&search=${search}`;
	}

	if(page && page != "1"){
		url = ""
	}
	// console.log({ url });
	let users;
	let pageData;
	try {
		const data = (await _dataAccess.get(`/api/User/list?${url}`)).data;
		users = data.value;
		// console.log({ data });
		pageData = data;
	} catch (error) {}

	if (!id) {
		const firstUser = users[0];
		return {
			redirect: {
				permanent: false,
				destination: `/admin/users/${firstUser.id}/profile?${
					url ? `url=${url ?? ""}` : ""
				}`,
			},
		};
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
