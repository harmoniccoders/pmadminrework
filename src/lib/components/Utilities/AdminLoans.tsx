import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Approval from "../Utils/LoansTabs/Approval";
import Requests from "../Utils/LoansTabs/Requests";
import Review from "../Utils/LoansTabs/Review";
import Sourcing from "../Utils/LoansTabs/Sourcing";
import SecondaryTab from "./SecondaryTab";

function AdminLoans() {
	const [currentTab, setCurrentTab] = useState("requests");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
	};

	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex justify="flex-end">
				<Flex
					as="button"
					w="132px"
					h="2.3rem"
					borderRadius="3px"
					border="2px solid rgba(25,25,25,1)"
					align="center"
					bgColor="white"
					justify="center"
					fontSize="14.5px"
					fontWeight="bold"
				>
					Loans Setup
				</Flex>
			</Flex>
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
				<Box onClick={() => navigateTabs("requests")}>
					<SecondaryTab
						tabname="requests"
						num={89}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("review")}>
					<SecondaryTab
						tabname="review"
						num={4}
						icon="fa-fingerprint"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("sourcing")}>
					<SecondaryTab
						tabname="sourcing"
						num={9}
						icon="fa-file-search"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("approval")}>
					<SecondaryTab
						tabname="approval"
						num={0}
						icon="fa-user-check"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			{currentTab == "requests" && <Requests />}
			{currentTab == "review" && <Review />}
			{currentTab == "sourcing" && <Sourcing />}
			{currentTab == "approval" && <Approval />}
		</Box>
	);
}

export default AdminLoans;
