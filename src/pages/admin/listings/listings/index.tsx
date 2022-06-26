import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Listings from "lib/components/Utils/InvestmentsTab/Listings";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { PropertyModel } from "Services";

function Listing({
	data,
	listings,
	requests,
	propertyTitles,
	propertyTypes,
}: any) {
	const [currentTab, setCurrentTab] = useState("listings");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(tabname);
	};
	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("/admin/listings/enquires")}>
					<SecondaryTab
						tabname="enquires"
						num={data.size}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/listings/requests")}>
					<SecondaryTab
						tabname="requests"
						num={requests.size}
						icon="fa-bell"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/listings/listings")}>
					<SecondaryTab
						tabname="listings"
						num={listings.size}
						icon="fa-building"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Listings
				result={listings}
				propertyTitles={propertyTitles}
				propertyTypes={propertyTypes}
			/>
		</Box>
	);
}

export default Listing;

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
	let { url, search, filter } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=8&offset=0&";
	}
	url = url ?? "limit=8&offset=0&";

	if (search) {
		url = `${url}search=${search}`;
	}
	if (filter) {
		url = `${url}filter=${filter}`;
	}
	try {
		const data = (await _dataAccess.get(`/api/Admin/enquiries/list?${url}`))
			.data;
		const requests = (await _dataAccess.get(`/api/Admin/requests/list?${url}`))
			.data;
		const listings = (await _dataAccess.get(`api/Admin/properties/list?${url}`))
			.data;
		const propertyTypes = (await _dataAccess.get("/api/Property/types")).data;
		const propertyTitles = (await _dataAccess.get("/api/Property/titles")).data;

		return {
			props: {
				data,
				requests,
				listings,
				propertyTypes,
				propertyTitles,
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
