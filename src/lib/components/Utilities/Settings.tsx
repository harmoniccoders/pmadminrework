import {
	Box,
	Circle,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Admin from "../Utils/SettingsTab/Admin";
import Fees from "../Utils/SettingsTab/Fees";
import Tab from "./Tab";

function Setting() {
	const [currentTab, setCurrentTab] = useState("fees");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
	};
	return (
		<Box>
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)">
				<Box onClick={() => navigateTabs("fees")}>
					<Tab tabname="fees" currentTab={currentTab} />
				</Box>
				<Box onClick={() => navigateTabs("admins")}>
					<Tab tabname="admins" currentTab={currentTab} />
				</Box>
			</Flex>
			<Box w="100%" bgColor="white" p="1.5rem" minH="90vh">
				{currentTab == "fees" && <Fees />}
				{currentTab == "admins" && <Admin />}
			</Box>
		</Box>
	);
}

export default Setting;
