import {
	Box,
	Button,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Table,
	TableContainer,
	Tbody,
	Text,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import AddComplainCategory from "lib/components/Modals/AddComplaintCategory";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
const moment = require("moment");

export default function ComplaintsLists({ types }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	console.log({ types });

	return (
		<>
			<HStack
				bgColor="white"
				pt="1.5rem"
				justifyContent="flex-end"
				align="center"
				spacing={6}
				marginTop="0rem"
				cursor="pointer"
				px="1rem"
			>
				<Button
					bg="brand.100"
					onClick={onOpen}
					width="fit-content"
					px="2rem"
					height="3rem"
					color="#fff"
					borderRadius="8px"
				>
					+ &nbsp; Add New Category
				</Button>
			</HStack>
			<Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="Category Name" />
								<TableHead title="No of Sub category" />
								<TableHead title="Date Created" />
							</Tr>
						</Thead>

						<Tbody>
							{types.map((item: any) => {
								return (
									<Link href="" key={item.id}>
										<Tr>
											<TableData name={item.name} />
											<TableData name={item.complaintsSubCategories.length} />
											<TableData
												name={moment(item.dateCreated).format(
													"ddd-Do-MMM-YYYY"
												)}
											/>
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<AddComplainCategory isOpen={isOpen} onClose={onClose} result={types} />
			</Box>
		</>
	);
}
