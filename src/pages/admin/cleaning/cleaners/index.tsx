import { Box, Flex, Text } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

function CleanersIndex({ data, land }: any) {
	const [currentTab, setCurrentTab] = useState("cleaners");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(tabname);
	};
	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("/admin/cleaning/sessions")}>
					<SecondaryTab
						tabname="sessions"
						num={data.size}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("land-search")}>
					<SecondaryTab
						tabname="land-search"
						num={0}
						icon="fa-file-search"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/cleaning/cleaners")}>
					<SecondaryTab
						tabname="cleaners"
						num={0}
						icon="fa-users"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Text bgColor="white" minH="70vh" p="2rem">
				No content Here!
			</Text>
		</Box>
	);
}

export default CleanersIndex;

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
		const data = (
			await _dataAccess.get(`/api/Admin/clean/requests/list?${url}`)
		).data;
		// const land = (await _dataAccess.get(`/api/Admin/land/requests/list?${url}`))
		// 	.data;
		return {
			props: {
				data,
				// land,
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
