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
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import Tab from "lib/components/Utilities/Tab";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const moment = require("moment");

function ForRents({ result, page, propertyTitles, propertyTypes }: any) {
	const data = result.value.filter((x: any) => x.isForRent);
	const [items, setItems] = useState(data);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [currentTab, setCurrentTab] = useState("all");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
		if (tabname === "pending") {
			setItems(
				result.value.filter((x: any) => x.isForRent && x.status == "PENDING")
			);
			console.log({ data });
		} else if (tabname === "live") {
			setItems(
				result.value.filter((x: any) => x.isForRent && x.status == "VERIFIED")
			);
		} else {
			setItems(result.value.filter((x: any) => x.isForRent));
		}
	};
	return (
		<>
			<HStack bg="white" pt="2rem">
				<Box bg="gray.100" p=".2rem .3rem">
					<Flex>
						<Box onClick={() => navigateTabs("all")}>
							<Tab tabname="all" currentTab={currentTab} />
						</Box>
						<Box onClick={() => navigateTabs("pending")}>
							<Tab tabname="pending" currentTab={currentTab} />
						</Box>
						<Box onClick={() => navigateTabs("live")}>
							<Tab tabname="live" currentTab={currentTab} />
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
							{items.map((item: any) => {
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
				<Pagination data={page} />
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
