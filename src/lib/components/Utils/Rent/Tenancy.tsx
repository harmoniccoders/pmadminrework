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
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function Tenancy({ result }: any) {
	const data = result.value;
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
								<TableHead title="Property" />
								<TableHead title="Landlord" />
								<TableHead title="Tenant" />
								<TableHead title="Annual Rent" />
								<TableHead title="Next Payment" />
							</Tr>
						</Thead>

						<Tbody>
							{data.map((item: any) => {
								return (
									<Link
										href={"/admin/rent/tenancies/" + item.id}
										key={item.propertyId}
									>
										<Tr>
											<TableData name={item.property.name} />
											<TableData
												name={`${item.owner?.firstName} ${item.owner?.lastName}`}
											/>
											<TableData
												name={`${item.tenant.firstName} ${item.tenant.lastName}`}
											/>
											<TableData name={Naira(item.property.price)} />
											<TableData
												name={moment(item.rentDueDate).format("DD/MM/YY")}
											/>
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={result} />
			</Box>
		</>
	);
}

export default Tenancy;
