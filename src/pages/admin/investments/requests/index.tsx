import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import Requests from "lib/components/Utils/InvestmentsTab/Requests";
import { useRouter } from "next/router";
import { useState } from "react";

function Request() {
	const [currentTab, setCurrentTab] = useState("requests");
	const router = useRouter();
	// const navigateTabs = (tabname: string) => {
	// 	setCurrentTab(tabname);
	// };
	const navigateTabs = (tabname: string) => {
		router.push(tabname);
	};
	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("/admin/investments")}>
					<SecondaryTab
						tabname="enquires"
						num={89}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/investments/requests")}>
					<SecondaryTab
						tabname="requests"
						num={4}
						icon="fa-bell"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("/admin/investments/listings")}>
					<SecondaryTab
						tabname="listings"
						num={9}
						icon="fa-building"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Requests />
		</Box>
	);
}

export default Request;
