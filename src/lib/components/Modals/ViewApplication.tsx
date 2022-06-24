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
	Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { ApplicationView } from "Services";
import ApplicationBox from "../Utilities/ApplicationBox";
const moment = require("moment");

function ViewApplication({
	isOpen,
	onClose,
	data,
}: {
	isOpen: boolean;
	onClose: any;
	data: ApplicationView;
}) {
	console.log({ data });

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
						Application
					</Text>
					<Icon as={MdClose} onClick={onClose} cursor="pointer" />
				</ModalHeader>
				<ModalBody>
					<Box maxH="80vh" overflow="auto" px="1.5rem" w="full">
						<HStack mt="3rem" align="flex-start" spacing="4rem">
							<Box w="full">
								<ApplicationBox
									label="First name"
									detail={data.user?.firstName}
								/>
								<ApplicationBox
									label="Middle name"
									detail={data.user?.lastName}
								/>

								<ApplicationBox
									label="Mobile number"
									detail={data.user?.phoneNumber}
								/>
								<ApplicationBox
									label="Mobile number"
									detail={data.user?.phoneNumber1 || "-"}
								/>
								<ApplicationBox label="Email" detail={data.user?.email} />
								<ApplicationBox
									label="Residential Address"
									detail={data.user?.address}
								/>
								<ApplicationBox
									label="Date of Birth"
									detail={moment(data.user?.dateOfBirth).format("DD/MM/YY")}
								/>
								<ApplicationBox
									label="Nationality"
									detail={data.user?.nationality}
								/>
								<ApplicationBox
									label="Marital status"
									detail={data.user?.maritalStatus}
								/>
								<ApplicationBox
									label="Occupation"
									detail={data.user?.occupation}
								/>
							</Box>
							<Box w="full">
								<ApplicationBox
									label="Employer"
									detail={data.user?.companyName}
								/>
								<ApplicationBox
									label="Work Address"
									detail={data.user?.address}
								/>

								<Text
									color="black"
									fontSize="1.1rem"
									textAlign="left"
									fontWeight="semibold"
									px={5}
									my="1.85rem"
								>
									Next of Kin
								</Text>
								<ApplicationBox
									label="First name"
									detail={data.nextOfKin?.firstName}
								/>
								<ApplicationBox
									label="Surname"
									detail={data.nextOfKin?.lastName}
								/>
								<ApplicationBox
									label="Mobile number"
									detail={data.nextOfKin?.phoneNumber}
								/>
								<ApplicationBox label="Email" detail={data.nextOfKin?.email} />
								<ApplicationBox
									label="Address"
									detail={data.nextOfKin?.address}
								/>
								<ApplicationBox
									label="Relationship"
									detail={data.nextOfKin?.relationship}
								/>
							</Box>
						</HStack>
						<Flex justify="center">
							<Button
								w="40%"
								height="3.2rem"
								borderRadius="6px"
								bgColor="brand.100"
								color="white"
								onClick={onClose}
								my="3rem"
							>
								Ok
							</Button>
						</Flex>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default ViewApplication;
