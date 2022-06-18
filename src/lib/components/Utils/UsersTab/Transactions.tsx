import {
	Box,
	Flex,
	Icon,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Filter from "lib/components/Utilities/Filter";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import { MdFilterList } from "react-icons/md";
const moment = require("moment");

function Transactions() {
	// const complaints = complains.value;

	return (
        <>
        <Filter />
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
							<TableHead title="Date & Time" />
							<TableHead title="Type" />
							<TableHead title="Service" />
							<TableHead title="Amount" />
							<TableHead title="Recipient" />
							<TableHead title="Status" />
						</Tr>
					</Thead>

					<Tbody>
						<Tr>
							{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
							<TableData name="5/08/20 - 4:48PM" />
							<TableData name="SLIPCARD" />
							<TableData name="Google Gsuites" />
							<TableData name="₦4,320" />
							<TableData name="Interswitch" />
							<TableData name="Succesful" />
						</Tr>
                        <Tr>
							{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
							<TableData name="5/08/20 - 4:48PM" />
							<TableData name="SLIPCARD" />
							<TableData name="Google Gsuites" />
							<TableData name="₦4,320" />
							<TableData name="Interswitch" />
							<TableData name="Succesful" />
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
			{/* <Pagination data={complains} /> */}
		</Box>
        </>
	);
}

export default Transactions;
