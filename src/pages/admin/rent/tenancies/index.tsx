import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Enquires from "lib/components/Utils/InvestmentsTab/Enquires";
import ApplicationRent from "lib/components/Utils/Rent/ApplicationRent";
import Tenancy from "lib/components/Utils/Rent/Tenancy";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

function Tenancies({ data, rent, tenancy }: any) {
	const [currentTab, setCurrentTab] = useState("tenancies");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(tabname);
	};

	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("/admin/rent/applications")}>
					<SecondaryTab
						tabname="applications"
						num={data.size}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/rent/for-rent")}>
					<SecondaryTab
						tabname="for rent"
						num={rent.size}
						icon="fa-house-leave"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/rent/tenancies")}>
					<SecondaryTab
						tabname="tenancies"
						num={tenancy.size}
						icon="fa-house-user"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Tenancy result={tenancy} />
		</Box>
	);
}

export default Tenancies;

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
		const data = (await _dataAccess.get(`/api/Admin/applications/rent?${url}`))
			.data;
		const rent = (
			await _dataAccess.get(`/api/Admin/properties/list/rent?${url}`)
		).data;
		const tenancy = (await _dataAccess.get(`/api/Admin/tenancies?${url}`)).data;

		return {
			props: {
				data,
				rent,
				tenancy,
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
