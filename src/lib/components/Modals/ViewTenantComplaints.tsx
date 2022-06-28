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
	// Tab,
	// TabList,
	// TabPanel,
	// TabPanels,
	// Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { DataAccess } from "lib/Utils/Api";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { ApplicationView, ComplaintsView } from "Services";
import ApplicationBox from "../Utilities/ApplicationBox";
const moment = require("moment");
//@ts-ignore
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from "react-smarttab";
import "react-smarttab/dist/index.css";

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

	const [property, setProperty] = useState<any>();

	useEffect(() => {
		const getProperty = async () => {
			const bearer = `Bearer ${Cookies.get("adminToken")}`;
			const _dataAccess = new DataAccess(bearer);
			const result = await _dataAccess.get(
				`/api/Complaints/property/${propertyId}/list`
			);

			if (result.status) {
				setProperty(result.data.value);
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
				maxW="60%"
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
					<Box h="70vh" overflow="auto" px="1.5rem" w="full">
						<>
							{property !== undefined && (
								<>
									{property.length > 0 ? (
										<Tabs
											orientation={"vertical"}
											selected={0}
											justified={true}
											// theme="sourceforge"
											enableURLhash={false}
										>
											<TabNav>
												{property.map((tab: ComplaintsView, index: any) => (
													<TabNavItem key={index}>
														<Box>
															<Text
																fontSize="1rem"
																fontWeight="600"
																textTransform="capitalize"
															>
																{tab.complaintsCategory}
															</Text>
															<Text fontSize="14px">01/31/2022</Text>
														</Box>
													</TabNavItem>
												))}
											</TabNav>

											<TabContent>
												{property.map((tab: ComplaintsView, index: any) => (
													<TabPanel p={4} key={index}>
														<Box>
															<VStack align="flex-start" ml="2rem" spacing={3}>
																<Box
																	py=".5rem"
																	borderBottom="1px solid #eee"
																	w="full"
																>
																	<Text fontSize="14px">Category</Text>
																	<Text
																		fontSize="1rem"
																		fontWeight="600"
																		textTransform="capitalize"
																	>
																		{tab.complaintsCategory}
																	</Text>
																</Box>
																<Box
																	py=".5rem"
																	borderBottom="1px solid #eee"
																	w="full"
																>
																	<Text fontSize="14px">Sub Category</Text>
																	<Text
																		fontSize="1rem"
																		fontWeight="600"
																		textTransform="capitalize"
																	>
																		{tab.complaintsSubCategory}
																	</Text>
																</Box>
																<Box
																	py=".5rem"
																	borderBottom="1px solid #eee"
																	w="full"
																>
																	<Text fontSize="14px">Comments</Text>
																	<Text
																		fontSize="1rem"
																		fontWeight="600"
																		textTransform="capitalize"
																	>
																		{tab.comment}
																	</Text>
																</Box>
															</VStack>
														</Box>
													</TabPanel>
												))}
											</TabContent>
										</Tabs>
									) : (
										"No Complaint at this time!"
									)}
								</>
							)}
						</>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default ViewTenantComplaints;
