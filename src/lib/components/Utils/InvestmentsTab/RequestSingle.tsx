import {
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	TableContainer,
	Tbody,
	Tr,
	Table,
} from "@chakra-ui/react";
import AddMatch from "lib/components/Modals/AddMatchModal";
import RequestStatus from "lib/components/Modals/RequestStatus";
import NameTag from "lib/components/NameTag";
import { TableData } from "lib/components/Utilities/Tables";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

function RequestSingle() {
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const [isMatchOpen, setIsMatchOpen] = useState(false);
	const openMatchModal = () => {
		setIsMatchOpen(true);
	};
	const closeMatchModal = () => {
		setIsMatchOpen(false);
	};
	return (
		<Box bgColor="white" p="1rem" minH="80vh">
			<Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
				<FaChevronLeft fontSize="20px" />
				<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
					3 Bedroom Terrace
				</Text>
			</Flex>
			<HStack align="flex-start">
				<Flex w="30%" justify="space-between">
					<VStack spacing="1rem" alignItems="flex-start">
						<NameTag title="User" name="Pade Omotosho" />
						<NameTag title="Payment Status" name="Pending" />
						<NameTag title="Location" name="Lekki" />
						<NameTag title="Area" name="Sangotedo" />
						<NameTag title="Budget" name="₦40,000,000" />
					</VStack>
				</Flex>
				<Box w="70%" mt="1rem !important">
					<Flex justify="space-between">
						<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
							Matches
						</Text>
						<HStack spacing="1.5rem" alignItems="flex-start">
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
									Status Update
								</Flex>
							</Box>
							<Box w="180px" onClick={openMatchModal}>
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
									Add a Match
								</Flex>
							</Box>
						</HStack>
					</Flex>
					<Box
						w="full"
						minH="500px"
						bgColor="white"
						// boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
						borderRadius="5"
						p=" 1.5rem 0 1rem"
					>
						<TableContainer h="500px" overflowY="hidden">
							<Table variant="simple">
								<Tbody>
									<Tr>
										{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
										<TableData name="3 Bedroom Apartment" />
										<TableData name="Abraham Adesanya" />
										<TableData name="Lekki" />
										<TableData name="Lagos" />
										<TableData name="₦25,000,000" />
										<TableData name="₦25,000,000" />
									</Tr>
									<Tr>
										{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
										<TableData name="3 Bedroom Apartment" />
										<TableData name="Abraham Adesanya" />
										<TableData name="Lekki" />
										<TableData name="Lagos" />
										<TableData name="₦25,000,000" />
										<TableData name="₦25,000,000" />
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						{/* <Pagination data={complains} /> */}
					</Box>
				</Box>
			</HStack>
			<AddMatch isOpen={isMatchOpen} onClose={closeMatchModal} />
			<RequestStatus isOpen={isOpen} onClose={closeModal} />
		</Box>
	);
}

export default RequestSingle;
