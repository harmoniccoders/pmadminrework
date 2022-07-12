import {
	Box,
	Button,
	Flex,
	HStack,
	Table,
	TableContainer,
	Tbody,
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

export default function Listings({
	result,
	propertyTitles,
	propertyTypes,
}: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const data = result.value;
	const [currentTab, setCurrentTab] = useState("");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
		router.push({
			query: {
				filter: tabname,
			},
		});
	};
	console.log({ data });

	return (
		<>
			<HStack bg="white" pt="2rem">
				<Box bg="gray.100" p=".2rem .3rem">
					<Flex>
						<Box onClick={() => navigateTabs("")}>
							<FilterTab tabname="" currentTab={currentTab} title="all" />
						</Box>
						<Box onClick={() => navigateTabs("pending")}>
							<FilterTab
								tabname="pending"
								currentTab={currentTab}
								title="pending"
							/>
						</Box>
						<Box onClick={() => navigateTabs("verified")}>
							<FilterTab
								tabname="verified"
								currentTab={currentTab}
								title="active"
							/>
						</Box>
						<Box onClick={() => navigateTabs("sold")}>
							<FilterTab
								tabname="sold"
								currentTab={currentTab}
								title="closed"
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
				{/* <SearchComponent /> */}
				<Button
					bg="brand.100"
					onClick={onOpen}
					w="fit-content"
					px="3rem"
					h="3rem"
					color="#fff"
					borderRadius="8px"
				>
					Add New Property
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
								<TableHead title="Seller" />
								<TableHead title="Location" />
								<TableHead title="Locality" />
								<TableHead title="Price" />
								<TableHead title="Date Added" />
								<TableHead title="Property Type" />
								<TableHead title="Sale Type" />
							</Tr>
						</Thead>

						<Tbody>
							{data.map((item: any) => {
								return (
									<Link
										href={"/admin/listings/listings/" + item.id}
										key={item.id}
									>
										<Tr>
											<TableData name={item.name} />
											<TableData name={item.createdByUser.fullName} />
											<TableData name={item.state} />
											<TableData name={item.lga} />
											<TableData name={Naira(item.price)} />
											<TableData
												name={moment(item.dateCreated).format("DD/MM/YY")}
											/>
											<TableData
												name={item.isForRent ? "For Rent" : "For Sale"}
											/>
											<TableData name={item.sellMyself ? "Self-sale" : "PM"} />
										</Tr>
									</Link>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={result} />
				<AddProperty
					isOpen={isOpen}
					onClose={onClose}
					propertyTypes={propertyTypes}
					propertyTitles={propertyTitles}
					item={data}
					isRent={false}
					isSale={true}
				/>
			</Box>
		</>
	);
}
