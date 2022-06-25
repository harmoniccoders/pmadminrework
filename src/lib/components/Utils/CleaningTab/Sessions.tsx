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

function Sessions({ data, types }: any) {
	const result = data.value;
	// console.log({ data });
	const { isOpen, onOpen, onClose } = useDisclosure();

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
			>
				<InputGroup w="330px">
					<InputLeftElement
						h="42px"
						w="42px"
						children={<BsSearch color="rgba(0, 0, 0, 01)" />}
					/>
					<Input
						placeholder="Search"
						height="2.5rem"
						bgColor="white"
						border="2px solid black"
						borderRadius="4px"
						boxShadow="0"
						fontSize="14px"
						fontWeight="medium"
						padding="0 3rem"
						color="black !important"
						_focus={{
							borderColor: "unset",
							border: "0",
						}}
					/>
				</InputGroup>
				<Button
					bg="brand.100"
					onClick={onOpen}
					width="fit-content"
					px="3rem"
					height="3rem"
					color="#fff"
					borderRadius="8px"
				>
					+ &nbsp; Add New Job
				</Button>
			</HStack>
			<Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="Building Type" />
								<TableHead title="User" />
								<TableHead title="Purpose" />
								<TableHead title="State" />
								<TableHead title="Floors" />
								<TableHead title="Location" />
								<TableHead title="Preferred Date" />
							</Tr>
						</Thead>

						<Tbody>
							{result.map((item: CleaningView) => {
								return (
									<Link
										href={"/admin/cleaning/sessions/" + item.id}
										key={item.id}
									>
										<Tr>
											<TableData
												name={(item.buildingType as string).toLowerCase()}
											/>
											<TableData name={item.user?.fullName as string} />
											<TableData name={item.propertyType as string} />
											<TableData name={item.buildingState as string} />
											<TableData
												name={item.numberOfFloors as unknown as string}
											/>
											<TableData name={item.location as string} />
											<TableData
												name={moment(item.dateNeeded).format("DD/MM/YY")}
											/>
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={data} />
				<AddCleanJob isOpen={isOpen} onClose={onClose} result={types} />
			</Box>
		</>
	);
}

export default Sessions;
