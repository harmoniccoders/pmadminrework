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
import AddCleanJob from "lib/components/Modals/AddCleanJob";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { CleaningView } from "types/api";
const moment = require("moment");

export default function Sessions({ data }: any) {
	const result = data.value;
	console.log({ result });

	return (
		<>
			<HStack
				bgColor="white"
				pt="1.5rem"
				justifyContent="space-between"
				align="center"
				spacing={6}
				marginTop="0rem"
				cursor="pointer"
				px="1rem"
			></HStack>
			<Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="User" />
								<TableHead title="File Name" />
								<TableHead title="File Number" />
								<TableHead title="Date Created" />
							</Tr>
						</Thead>

						<Tbody>
							{result.map((item: CleaningView) => {
								return (
									<Link href="" key={item.id}>
										<Tr>
											{/* <TableData
												name={(item.buildingType as string).toLowerCase()}
											/>
											<TableData name={item.user?.fullName as string} />
											<TableData name={item.propertyType as string} />
											<TableData
												name={moment(item.dateNeeded).format("DD/MM/YY")}
											/> */}
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={data} />
			</Box>
		</>
	);
}
