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

export default function ComplaintsLists({ data }: any) {
	return (
		<>
			<Box w="full" minH="500px" bgColor="white" borderRadius="5" p=" 1rem 0">
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="Category" />
								<TableHead title="Sub category" />
								<TableHead title="Comment" />
								<TableHead title="Status" />
							</Tr>
						</Thead>

						<Tbody>
							{data.map((item: any) => {
								return (
									<Link href="" key={item.id}>
										<Tr>
											<TableData name={item.complaintsCategory} />
											<TableData name={item.complaintsSubCategory} />
											<TableData name={item.comment} />
											<TableData name={item.status.toLowerCase()} />
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
