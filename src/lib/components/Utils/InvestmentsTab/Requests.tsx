import {
	Box,
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
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function Requests() {
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
								<TableHead title="Type" />
								<TableHead title="User" />
								<TableHead title="State" />
								<TableHead title="Locality" />
								<TableHead title="Area" />
								<TableHead title="Budget" />
								<TableHead title="Status" />
							</Tr>
						</Thead>

						<Tbody>
							<Link href={"/admin/investments/requests/" + 1} key={1}>
								<Tr>
									{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
									<TableData name="3 Bedroom Terrace" />
									<TableData name="Pade Omotosho" />
									<TableData name="Lagos" />
									<TableData name="Lekki" />
									<TableData name="Sangotedo" />
									<TableData name="₦40,000,000" />
									<TableData name="Pending" />
								</Tr>
							</Link>
							<Tr>
								{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
								<TableData name="3 Bedroom Terrace" />
								<TableData name="Pade Omotosho" />
								<TableData name="Lagos" />
								<TableData name="Lekki" />
								<TableData name="Sangotedo" />
								<TableData name="₦40,000,000" />
								<TableData name="Pending" />
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				{/* <Pagination data={complains} /> */}
			</Box>
		</>
	);
}

export default Requests;
