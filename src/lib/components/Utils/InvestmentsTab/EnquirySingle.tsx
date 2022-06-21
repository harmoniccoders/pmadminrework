import {
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import ViewApplication from "lib/components/Modals/ViewApplication";
import ViewListings from "lib/components/Modals/ViewListings";
import NameTag from "lib/components/NameTag";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { useRouter } from "next/router";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft } from "react-icons/fa";
import { PropertyModel, PropertyView } from "Services";

interface Eprops {
	data: PropertyView;
}
function EnquirySingle({ data }: Eprops) {
	console.log({ data });

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
				<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
					{data.name}
				</Text>
			</Flex>
			<HStack spacing={8} align="flex-start">
				<Flex w="70%" justify="space-between" mt="0.5rem">
					<VStack spacing="1rem" alignItems="flex-start">
						<NameTag
							title="User"
							name={data.createdByUser?.fullName as string}
						/>
						<NameTag title="Status" name={data.status as string} />
						<NameTag title="State" name={data.state as string} />
						<NameTag title="Locality" name={data.lga as string} />
						<NameTag title="Area" name={data.area as string} />
						<NameTag title="Inspection" name="₦40,000,000" />
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
					<Calendar />
					<TimeDisplay />
				</Box>
			</HStack>
			<ViewListings isOpen={open} onClose={closeModal} data={data} />
			<ViewApplication isOpen={isOpen} onClose={onClose} data={data} />
		</Box>
	);
}

export default EnquirySingle;
