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
import AddNewAdmin from "lib/components/Modals/AddNewAdmin";
import Tab from "lib/components/Utilities/Tab";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import AdminProfile from "./AdminProfile";
import Permission from "./Permission";

function Admin() {
	const [currentTab, setCurrentTab] = useState("profile");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
	};
	const [successOpen, setsuccessOpen] = useState(false);
	const openModal = () => {
		setsuccessOpen(true);
	};
	const closeModal = () => {
		setsuccessOpen(false);
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
						Pade Omotosho
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
						Pade Omotosho
					</Text>
				</Flex>
			</Box>
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
				<Box w="20%" onClick={openModal} ml="auto">
					<Flex
						as="button"
						w="full"
						h="2.3rem"
						borderRadius="3px"
						border="2px solid rgba(25,25,25,1)"
						align="center"
						justify="center"
						fontSize="14.5px"
						fontWeight="bold"
					>
						Add New Admin
					</Flex>
				</Box>
				<Flex alignItems="center" fontWeight="bold">
					<Box>
						<Text fontSize="1.5rem">Pade Omotosho</Text>
					</Box>
				</Flex>
				<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
					<Box onClick={() => navigateTabs("profile")}>
						<Tab tabname="profile" currentTab={currentTab} />
					</Box>
					<Box onClick={() => navigateTabs("permissions")}>
						<Tab tabname="permissions" currentTab={currentTab} />
					</Box>
				</Flex>
				{currentTab == "profile" && <AdminProfile />}
				{currentTab == "permissions" && <Permission />}
			</Box>
			<AddNewAdmin isOpen={successOpen} onClose={closeModal} />
		</HStack>
	);
}

export default Admin;
