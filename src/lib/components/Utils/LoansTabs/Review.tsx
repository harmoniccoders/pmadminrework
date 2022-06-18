import {
	Box,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Table,
	TableContainer,
	Tbody,
	Text,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import {
	TableActions,
	TableData,
	TableDataWithAvatar,
	TableHead,
} from "lib/components/Utilities/Tables";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function Review() {
	// const complaints = complains.value;

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
				<HStack>
					<Flex
						w="142px"
						h="36px"
						justify="space-between"
						alignItems="center"
						px="1.1rem"
						border="2px solid black"
						borderRadius="3px"
					>
						<Text color="black" fontSize="14px" fontWeight="600">
							Export
						</Text>
						<i className="far fa-file-export" style={{ color: "black" }}></i>
					</Flex>

					<Select
						w="99px"
						bgColor="black"
						borderRadius="3px"
						color="white"
						placeholder="Filter"
						fontSize="12px"
						fontWeight="500"
					>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</HStack>
			</HStack>
			<Box
				w="full"
				minH="500px"
				bgColor="white"
				// boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
				borderRadius="5"
				p=" 1rem 0"
			>
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="User" />
								<TableHead title="Amount" />
								<TableHead title="Term" />
								<TableHead title="Type" />
								<TableHead title="Schedule" />
								<TableHead title="Time" />
								<TableHead title="Status" />
								<TableHead title="" />
							</Tr>
						</Thead>

						<Tbody>
							<Tr>
								{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
								<TableDataWithAvatar name="Pade Omotosho" />
								<TableData name="₦4,320" />
								<TableData name="6 Months" />
								<TableData name="Personal" />
								<TableData name="Monthly" />
								<TableData name="1D 21H (2/02/21)" />
								<TableData name="Pending" />
								<TableActions />
							</Tr>
							<Tr>
								{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
								<TableDataWithAvatar name="Pade Omotosho" />
								<TableData name="₦4,320" />
								<TableData name="6 Months" />
								<TableData name="Personal" />
								<TableData name="Monthly" />
								<TableData name="1D 21H (2/02/21)" />
								<TableData name="Pending" />
								<TableActions />
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				{/* <Pagination data={complains} /> */}
			</Box>
		</>
	);
}

export default Review;
