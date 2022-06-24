import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Enquires from "lib/components/Utils/InvestmentsTab/Enquires";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

function Listings({ data, listings, requests }: any) {
	const [currentTab, setCurrentTab] = useState("enquires");
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
			<Enquires result={data} />
		</Box>
	);
}

export default Listings;

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
	let { url, search } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=8&offset=0&";
	}
	url = url ?? "limit=8&offset=0&";

	if (search) {
		url = `${url}search=${search}`;
	}
	try {
		const data = (await _dataAccess.get(`/api/Admin/enquiries/list?${url}`))
			.data;
		const requests = (await _dataAccess.get(`/api/Admin/requests/list?${url}`))
			.data;
		const listings = (await _dataAccess.get(`/api/Property/list/sales?${url}`))
			.data;

		return {
			props: {
				data,
				requests,
				listings,
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
