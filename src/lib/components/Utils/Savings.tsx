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
import { BsSearch } from "react-icons/bs";
import CreateNewPlan from "../Modals/CreateNewPlan";
import Tab from "../Utilities/Tab";
import Setup from "./SavingsTab/Setup";
import Statistics from "./SavingsTab/Statistics";
function Savings() {
	const [currentTab, setCurrentTab] = useState("statistics");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
	};
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<HStack spacing="1rem" h="auto" alignItems="flex-start">
			<Box w="20%" bgColor="white" minH="90vh" h="100%">
				<InputGroup>
					<InputLeftElement
						h="42px"
						w="42px"
						children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
					/>
					<Input
						placeholder="Search"
						height="2.5rem"
						bgColor="white"
						border="0"
						boxShadow="0"
						fontSize="14px"
						fontWeight="medium"
						padding="0 3rem"
						_focus={{
							borderColor: "unset",
							border: "0",
						}}
					/>
				</InputGroup>
				<Text
					color="black"
					fontSize="14px"
					fontWeight="bold"
					pl="1.2rem"
					cursor="pointer"
					my="1rem"
					onClick={() => openModal()}
				>
					Create New Plan
				</Text>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					transition="all .2s ease"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						pl="1.2rem"
						_groupHover={{ color: "white" }}
					>
						LiquedeSeal
					</Text>
				</Flex>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					transition="all .2s ease"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						pl="1.2rem"
						_groupHover={{ color: "white" }}
					>
						Liquede Goal
					</Text>
				</Flex>
			</Box>
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
				<Flex alignItems="center" fontWeight="bold">
					<Box>
						<Text fontSize="1.5rem">Liquede Seal</Text>
					</Box>
				</Flex>
				<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
					<Box onClick={() => navigateTabs("statistics")}>
						<Tab tabname="statistics" currentTab={currentTab} />
					</Box>
					<Box onClick={() => navigateTabs("setup")}>
						<Tab tabname="setup" currentTab={currentTab} />
					</Box>
				</Flex>
				{currentTab == "statistics" && <Statistics />}
				{currentTab == "setup" && <Setup />}
			</Box>
			<CreateNewPlan isOpen={isOpen} onClose={closeModal} />
		</HStack>
	);
}

export default Savings;
