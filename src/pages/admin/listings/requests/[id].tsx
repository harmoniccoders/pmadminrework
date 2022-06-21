import axios from "axios";
import { returnUserData } from "lib/components/Utilities/UserData";
import RequestSingle from "lib/components/Utils/InvestmentsTab/RequestSingle";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";
import { PropertyTitle, PropertyType } from "Services";

interface RequestProps {
	propertyTypes: PropertyType[];
	propertyTitles: PropertyTitle[];
	getStates: any;
	data: any;
}
function SingleRequest({
	propertyTitles,
	propertyTypes,
	getStates,
	data,
}: RequestProps) {
	return (
		<RequestSingle
			data={data}
			propertyTitles={propertyTitles}
			propertyTypes={propertyTypes}
			getStates={getStates}
		/>
	);
}

export default SingleRequest;

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
		const data = (await _dataAccess.get(`/api/Admin/requests/get/${id}`)).data;
		const propertyTypes = (await _dataAccess.get("/api/Property/types")).data;
		const propertyTitles = (await _dataAccess.get("/api/Property/titles")).data;
		const getStates = (
			await axios.get("http://locationsng-api.herokuapp.com/api/v1/states")
		).data;
		return {
			props: {
				data,
				propertyTypes,
				propertyTitles,
				getStates,
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
