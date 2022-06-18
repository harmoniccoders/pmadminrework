import {
	Box,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Thead,
	Tr,
} from "@chakra-ui/react";
import {
	TableData,
	TableHead,
	TableStatusSlider,
} from "lib/components/Utilities/Tables";
import React, { useState } from "react";

function Fees() {
	const [successOpen, setsuccessOpen] = useState(false);
	const openModal = () => {
		setsuccessOpen(true);
	};
	const closeModal = () => {
		setsuccessOpen(false);
	};
	return (
		<Box>
			<Box w="20%" onClick={openModal}>
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
					Add New
				</Flex>
			</Box>
			<Box w="full" minH="500px" bgColor="white" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="Name" />
								<TableHead title="Assigned To" />
								<TableHead title="Event" />
								<TableHead title="Status" />
							</Tr>
						</Thead>

						<Tbody>
							<Tr>
								{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
								<TableData name="Bill Payment" />
								<TableData name="DSTV" />
								<TableData name="Pay" />
								<TableStatusSlider name="Active" />
							</Tr>
							<Tr>
								{/* <TableData name={moment(x.departureDate).format("MMM Do YYYY")} /> */}
								<TableData name="Bill Payment" />
								<TableData name="DSTV" />
								<TableData name="Pay" />
								<TableStatusSlider name="Inactive" />
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				{/* <Pagination data={complains} /> */}
			</Box>
		</Box>
	);
}

export default Fees;
