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
import { ReportView, ReportViewPagedCollection } from "Services";
const moment = require("moment");

export default function ReportLists({ data }: { data: ReportViewPagedCollection }) {
	console.log(data)
	return (
		<>
			<Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
							<TableHead title="S/N" />
								<TableHead title="Name" />
								<TableHead title="Email" />
								<TableHead title="Property" />
								<TableHead title="Complaint date" />
							</Tr>
						</Thead>

						<Tbody>
							{data?.value?.map((item: ReportView, i) => {
								return (
									<Link href="" key={i}>
										<Tr>
											<TableData name={++i} />
											
											<TableData name={item.user?.firstName } />
											<TableData name={item.email} />
											<TableData name={item.property?.name} />
											<TableData name={moment(item.dateCreated).format("MMM DD, YYYY")} />
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
}
