import {
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import ViewApplication from "lib/components/Modals/ViewApplication";
import ViewListings from "lib/components/Modals/ViewListings";
import NameTag from "lib/components/NameTag";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { DataAccess } from "lib/Utils/Api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft } from "react-icons/fa";
import { PropertyModel, PropertyView, UserEnquiryView } from "Services";
const moment = require("moment");

interface Eprops {
	data: any;
}
function EnquirySingle({ data }: Eprops) {
	const [property, setProperty] = useState<any>();
	const [user, setUser] = useState<any>();
	useEffect(() => {
		const fetchProperty = async () => {
			const getProperty = async () => {
				const bearer = `Bearer ${Cookies.get("token")}`;
				const _dataAccess = new DataAccess(bearer);
				const result = await _dataAccess.get(
					`/api/Property/get/${data.propertyId}`
				);
				if (result.status) {
					setProperty(result.data);
				}
			};
			getProperty();
			const getUser = async () => {
				const bearer = `Bearer ${Cookies.get("token")}`;
				const _dataAccess = new DataAccess(bearer);
				const result = await _dataAccess.get(
					`/api/Application/list/${data.propertyId}`
				);
				if (result.status) {
					setUser(result.data.value);
				}
			};
			getUser();
		};
		fetchProperty();
	}, []);

	let singleUser;
	if (user !== undefined) {
		singleUser = user.filter((x: any) => x.user.id == data.userId)[0];
	}
	console.log({ singleUser });

	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	const [open, setOpen] = useState(false);
	const openModal = () => {
		setOpen(true);
	};
	const closeModal = () => {
		setOpen(false);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box bgColor="white" p="1rem" minH="80vh">
			<Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
				<FaChevronLeft fontSize="20px" />
				<Text
					fontSize="24px"
					fontWeight="bold"
					pl="1rem"
					mb="0 !important"
					textTransform="capitalize"
				>
					{data.propertyName}
				</Text>
			</Flex>
			<HStack spacing={8} align="flex-start">
				<Flex w="70%" justify="space-between" mt="0.5rem">
					<VStack spacing="1rem" alignItems="flex-start">
						<NameTag title="User" name={data.fullName as string} />
						<NameTag
							title="Status"
							name={data.active ? "Active" : "Inactive"}
						/>
						<NameTag title="State" name={data.state as string} />
						<NameTag title="Locality" name={data.lga as string} />
						<NameTag title="Area" name={data.area as string} />
						<NameTag
							title="Inspection"
							name={
								data.inspection?.length > 0
									? moment(data.inspection[0].date).format("DD/MM/YY - LT")
									: "No data"
							}
						/>
						<NameTag
							title="Date Applied"
							name={moment(data.dateCreated).format("DD/MM/YY - LT")}
						/>
					</VStack>
					<VStack spacing="1.5rem" alignItems="flex-start">
						<Box w="180px" onClick={openModal}>
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
								View Property
							</Flex>
						</Box>
						<Box w="180px">
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
								Upload Documents
							</Flex>
						</Box>
						<Box w="180px" onClick={onOpen}>
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
								View Application Form
							</Flex>
						</Box>
					</VStack>
				</Flex>
				<Box w="30%">
					<Calendar value={new Date(data.dateCreated)} />
					<TimeDisplay data={data} />
				</Box>
			</HStack>
			<ViewListings isOpen={open} onClose={closeModal} data={property} />
			{singleUser !== undefined && (
				<ViewApplication isOpen={isOpen} onClose={onClose} data={singleUser} />
			)}
		</Box>
	);
}

export default EnquirySingle;
