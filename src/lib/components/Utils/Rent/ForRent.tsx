import {
	Box,
	Button,
	Flex,
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
import AddProperty from "lib/components/Modals/AddProperty";
import FilterTab from "lib/components/Utilities/FilterTab";
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import SearchComponent from "lib/components/Utilities/SearchComponent";
import Tab from "lib/components/Utilities/Tab";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function ForRents({ data, propertyTitles, propertyTypes }: any) {
	const result = data.value;

	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	const [currentTab, setCurrentTab] = useState("");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
		router.push({
			query: {
				filter: tabname,
			},
		});
	};
	return (
		<>
			<HStack bg="white" pt="2rem">
				<Box bg="gray.100" p=".2rem .3rem">
					<Flex>
						<Box onClick={() => navigateTabs("")}>
							<FilterTab title="all" tabname="" currentTab={currentTab} />
						</Box>

						<Box onClick={() => navigateTabs("verified")}>
							<FilterTab
								title="active"
								tabname="verified"
								currentTab={currentTab}
							/>
						</Box>
						<Box onClick={() => navigateTabs("inactive")}>
							<FilterTab
								title="closed"
								tabname="inactive"
								currentTab={currentTab}
							/>
						</Box>
					</Flex>
				</Box>
			</HStack>
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
				<SearchComponent />
				<Button
					bg="brand.100"
					onClick={onOpen}
					width="fit-content"
					px="3rem"
					height="3rem"
					color="#fff"
					borderRadius="8px"
				>
					+ &nbsp; Add New Rent
				</Button>
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
								<TableHead title="Name" />
								<TableHead title="Owner" />
								<TableHead title="Location" />
								<TableHead title="Locality" />
								<TableHead title="Rent" />
								<TableHead title="Date Added" />
								<TableHead title="Rental Type" />
							</Tr>
						</Thead>

						<Tbody>
							{result.map((item: any) => {
								return (
									<Link
										href={"/admin/rent/for-rent/" + item.id}
										key={item.propertyId}
									>
										<Tr>
											<TableData name={item.name} />
											<TableData name={item.createdByUser.fullName} />
											<TableData name={item.state} />
											<TableData name={item.area} />
											<TableData name={Naira(item.price)} />
											<TableData
												name={moment(item.dateCreated).format("DD/MM/YY")}
											/>
											<TableData name={item.sellMyself ? "Self-sale" : "PM"} />
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={data} />
			</Box>
			<AddProperty
				isOpen={isOpen}
				onClose={onClose}
				propertyTypes={propertyTypes}
				propertyTitles={propertyTitles}
				item={data}
				isRent={true}
				isSale={false}
			/>
		</>
	);
}

export default ForRents;
