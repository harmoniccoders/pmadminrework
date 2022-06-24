import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { DataAccess } from "lib/Utils/Api";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { ApplicationView, ComplaintsView } from "Services";
import ApplicationBox from "../Utilities/ApplicationBox";
const moment = require("moment");

function ViewTenantComplaints({
	isOpen,
	onClose,
	data,
}: {
	isOpen: boolean;
	onClose: any;
	data: any;
}) {
	// console.log({ data });
	const propertyId = data.property.id;
	// console.log({ propertyId });

	const [property, setProperty] = useState<any>();

	useEffect(() => {
		const getProperty = async () => {
			const bearer = `Bearer ${Cookies.get("token")}`;
			const _dataAccess = new DataAccess(bearer);
			const result = await _dataAccess.get(
				`/api/Complaints/property/${propertyId}/list`
			);
			console.log({ result });

			if (result.status) {
				setProperty(result.data);
			}
		};
		getProperty();
	}, []);

	return (
		<Modal
			motionPreset="slideInBottom"
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<ModalOverlay
				bg="blackAlpha.300"
				backdropFilter="blur(10px) hue-rotate(5deg)"
			/>
			<ModalContent
				py={5}
				borderRadius="0"
				w={["88%", "80%"]}
				overflow="hidden"
				maxH="100vh"
				maxW="80%"
				mt="0"
				mb="0"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
			>
				<ModalHeader
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text
						color="black"
						fontSize="1.1rem"
						textAlign="left"
						fontWeight="semibold"
						px={5}
					>
						Complaints
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<Box maxH="80vh" overflow="auto" px="1.5rem" w="full">
						<Tabs>
							<TabList>
								{/* {data.map((tab: ComplaintsView, index: any) => (
									<Tab key={index}>
										<Box>
											<Text>{tab.complaintsCategory}</Text>
											<Text>{tab.dateCreated}</Text>
										</Box>
									</Tab>
								))} */}
							</TabList>
							<TabPanels>
								{/* {data.map((tab, index) => (
									<TabPanel p={4} key={index}>
										{tab.content}
									</TabPanel>
								))} */}
							</TabPanels>
						</Tabs>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default ViewTenantComplaints;
