import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Square,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import {
	TableActions,
	TableData,
	TableDataWithAvatar,
	TableHead,
} from "lib/components/Utilities/Tables";
import { BsSearch } from "react-icons/bs";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
const moment = require("moment");
import { useRouter } from "next/router";
import { Parameters } from "openapi-client-axios";
import Icons from "lib/components/Utilities/Icons";
import { ApproveBtn, RejectBtn } from "lib/components/Utilities/ReliefBtn";

function Sourcing({ data }: any) {
	const result = data.value;
	console.log({ result });

	const { addToast } = useToasts();
	const router = useRouter();

	function ApproveButton({ d }: any) {
		const [approveProperty, { loading, data, error }] = useOperationMethod(
			"Applicationapprove{id}"
		);

		const Approve = async (selected: any) => {
			const params: Parameters = {
				id: selected,
			};
			try {
				const result = await (await approveProperty(params)).data;

				if (result.status) {
					addToast(result.message, {
						appearance: "success",
						autoDismiss: true,
					});
					console.log({ result });

					router.reload();
					return;
				}
				addToast(result.message, {
					appearance: "error",
					autoDismiss: true,
				});
			} catch (err) {
				console.log(err);
			}
		};
		return <ApproveBtn loading={loading} onClick={() => Approve(d)} />;
	}
	function RejectButton({ d }: any) {
		const [deleteProperty, { loading, data, error }] = useOperationMethod(
			"Applicationreject{id}"
		);

		const Reject = async (selected: any) => {
			const params: Parameters = {
				id: selected,
			};

			try {
				const result = await (await deleteProperty(params)).data;

				if (result.status) {
					addToast("Succesful", {
						appearance: "success",
						autoDismiss: true,
					});
					router.reload();
					return;
				}
				addToast(result.message, {
					appearance: "error",
					autoDismiss: true,
				});
			} catch (err) {
				console.log(err);
			}
		};
		return <RejectBtn loading={loading} onClick={() => Reject(d)} />;
	}

	return (
		<>
			<HStack
				spacing={4}
				bgColor="white"
				p="1.5rem 1rem"
				borderBottom="1px solid rgba(239,239,239,1)"
			>
				<Flex
					align="center"
					px="1.5rem"
					border="1px solid rgba(241,241,241,1)"
					borderRadius="3px"
					h="65px"
				>
					<Square size="35px" mr=".5rem">
						<Image src="/assets/pb.png" w="full" h="auto" />
					</Square>
					<Box>
						<Text fontSize="12px" fontWeight="400" color="rgba(15,15,15,.5)">
							Providus Bank
						</Text>
						<Text
							fontSize="20px"
							fontWeight="semibold"
							color="rgba(15,15,15,1)"
						>
							₦136,670,342.78
						</Text>
					</Box>
				</Flex>
				<Flex
					align="center"
					px="1.5rem"
					border="1px solid rgba(241,241,241,1)"
					borderRadius="3px"
					h="65px"
				>
					<Box>
						<Text fontSize="12px" fontWeight="400" color="rgba(15,15,15,.5)">
							Total Loan Requests
						</Text>
						<Text
							fontSize="20px"
							fontWeight="semibold"
							color="rgba(15,15,15,1)"
						>
							₦15,500,000
						</Text>
					</Box>
					<Button fontSize="14px" w="187px" h="40px" ml="3rem">
						Send all for Approval
					</Button>
				</Flex>
			</HStack>
			<HStack
				bgColor="white"
				pt="1.5rem"
				justifyContent="flex-end"
				align="center"
				spacing={6}
				marginTop="0rem"
				cursor="pointer"
				px="1rem"
			>
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
				<TableContainer minH="500px" overflowY="hidden" pb="1rem">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="User" />
								<TableHead title="Property Name" />
								<TableHead title="Term" />
								<TableHead title="Type" />
								{/* <TableHead title="Schedule" /> */}
								<TableHead title="Date" />
								<TableHead title="Status" />
								<TableHead title="" />
							</Tr>
						</Thead>

						<Tbody>
							{result.map((item: any) => {
								return (
									<Tr>
										<TableDataWithAvatar name={item?.user.fullName} />
										<TableData name={item.property?.name} />
										<TableData name={Naira(item.reliefAmount)} />
										<TableData name={item.applicationType} />
										<TableData
											name={moment(item.dateCreated).format("DD/MM/YY - LT")}
										/>
										<TableData name={item.status} />
										<Td>
											<HStack spacing={4}>
												<ApproveButton d={item.id} />
												<RejectButton d={item.id} />
											</HStack>
										</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Pagination data={data} />
			</Box>
		</>
	);
}

export default Sourcing;
