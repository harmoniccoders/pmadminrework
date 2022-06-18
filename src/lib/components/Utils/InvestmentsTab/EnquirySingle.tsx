import { Box, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import ViewListings from "lib/components/Modals/ViewListings";
import NameTag from "lib/components/NameTag";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { useRouter } from "next/router";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft } from "react-icons/fa";

function EnquirySingle() {
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
	return (
		<Box bgColor="white" p="1rem" minH="80vh">
			<Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
				<FaChevronLeft fontSize="20px" />
				<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
					3 Bedroom Terrace
				</Text>
			</Flex>
			<HStack spacing={8} align="flex-start">
				<Flex w="70%" justify="space-between" mt="0.5rem">
					<VStack spacing="1rem" alignItems="flex-start">
						<NameTag title="User" name="Pade Omotosho" />
						<NameTag title="Payment Status" name="Pending" />
						<NameTag title="Location" name="Lekki" />
						<NameTag title="Area" name="Sangotedo" />
						<NameTag title="Budget" name="₦40,000,000" />
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
								Upload Receipt
							</Flex>
						</Box>
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
								Upload Documents
							</Flex>
						</Box>
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
								View Application Form
							</Flex>
						</Box>
					</VStack>
				</Flex>
				<Box w="30%">
					<Calendar />
					<TimeDisplay />
				</Box>
			</HStack>
			<ViewListings isOpen={isOpen} onClose={closeModal} />
		</Box>
	);
}

export default EnquirySingle;
