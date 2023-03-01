import {
	Box,
	Button,
	Circle,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import {useEffect} from 'react';
import AddNewAdmin from "lib/components/Modals/AddNewAdmin";
import Tab from "lib/components/Utilities/Tab";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import AdminProfile from "./AdminProfile";
import { useRouter } from "next/router";
import  {AdminlistResponse} from "types/api";
import { AdminService, UserView } from "Services";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { returnUserData } from "lib/components/Utilities/UserData";

function Admin({admins}: any) {
	const [currentTab, setCurrentTab] = useState("profile");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/admin/${tabname}`);
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
				{/* {JSON.stringify(admins)} */}
				{admins?.map((data: any, i:any)=>(
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					transition="all .2s ease"
					_hover={{ bgColor: "black" }}
					// key={i}
				>	
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						pl="1.2rem"
						_groupHover={{ color: "white" }}
					>
						 {data.firstName}
					</Text>
					
				</Flex>
				 ))}
			</Box>
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
				<Flex alignItems="center" fontWeight="bold" justify="space-between">
					<Box>
						<Text fontSize="1.5rem">Pade Omotosho</Text>
					</Box>
					<Button
						bg="brand.100"
						onClick={openModal}
						width="fit-content"
						px="2rem"
						height="3rem"
						color="#fff"
						borderRadius="8px"
					>
						+ &nbsp; Add New Admin
					</Button>
				</Flex>
				<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
					<Box onClick={() => navigateTabs("profile")}>
						<Tab tabname="profile" currentTab={currentTab} />
					</Box>
					<Box onClick={() => navigateTabs("permissions")}>
						<Tab tabname="permissions" currentTab={currentTab} />
					</Box>
				</Flex>
				<AdminProfile />
			</Box>
			<AddNewAdmin isOpen={successOpen} onClose={closeModal} />
		</HStack>
	);
}
  export default Admin;