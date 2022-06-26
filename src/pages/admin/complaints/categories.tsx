import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Sessions from "lib/components/Utils/CleaningTab/Sessions";
import CategoriesList from "lib/components/Utils/Complaints/CategoriesList";
import ComplaintsLists from "lib/components/Utils/Complaints/ComplaintsTable";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { type } from "os";
import { useState } from "react";

export default function categories({ data, types }: any) {
	const [currentTab, setCurrentTab] = useState("categories");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/complaints/${tabname}`);
	};
	console.log({ types });

	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("complaints")}>
					<SecondaryTab
						tabname="complaints"
						num={data.length}
						icon="fa-unlink"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("categories")}>
					<SecondaryTab
						tabname="categories"
						num={types.length}
						icon="fa-layer-group"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<CategoriesList data={data} types={types} />
		</Box>
	);
}

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
		const data = (await _dataAccess.get(`/api/Complaints/list?${url}`)).data;
		const types = (await _dataAccess.get("/api/Complaints/categories/list"))
			.data;

		return {
			props: {
				data,
				types,
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
