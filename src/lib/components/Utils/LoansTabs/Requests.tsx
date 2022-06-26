import {
	Box,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Table,
	TableContainer,
	Tbody,
	Text,
	Thead,
	Tr,
} from "@chakra-ui/react";
import CountdownTimer from "lib/components/Utilities/DateTerm";
import dateTerm from "lib/components/Utilities/DateTerm";
import Naira from "lib/components/Utilities/Naira";
import Pagination from "lib/components/Utilities/Pagination";
import {
	TableActions,
	TableData,
	TableDataWithAvatar,
	TableHead,
	TableStatus,
} from "lib/components/Utilities/Tables";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { useOperationMethod } from "react-openapi-client";
import { useToasts } from "react-toast-notifications";
import { Parameters } from "openapi-client-axios";
const moment = require("moment");

function Requests({ data }: any) {
	const result = data.value;
	// console.log({ result });

	const { addToast } = useToasts();
	const router = useRouter();

	const [approveProperty, { loading: isLoading, data: isData, error }] =
		useOperationMethod("Applicationreview{id}");

	const Approve = async (selected: any) => {
		const params: Parameters = {
			id: selected,
		};
		// console.log({ params });

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

	const [deleteProperty, { loading, data: dData, error: eError }] =
		useOperationMethod("Applicationreject{id}");

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
						bgColor="brand.100"
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
				<TableContainer h="500px" overflowY="hidden">
					<Table variant="simple">
						<Thead>
							<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
								<TableHead title="User" />
								<TableHead title="Amount" />
								<TableHead title="Term" />
								<TableHead title="Type" />
								<TableHead title="Schedule" />
								<TableHead title="Time" />
								<TableHead title="Status" />
								<TableHead title="" />
							</Tr>
						</Thead>

						<Tbody>
							{result.map((x: any) => {
								return (
									<Tr>
										<TableDataWithAvatar
											name={`${x.user.firstName} ${x.user.lastName}`}
										/>
										<TableData name={Naira(x.reliefAmount)} />
										<TableData
											name={`${moment(x.payBackDate).diff(
												moment(x.dateCreated),
												"month"
											)} Months`}
										/>
										<TableData name={x.applicationType.name} />
										<TableData name={x.repaymentFrequency} />
										<td>
											<CountdownTimer
												countdownTimestampMs={moment(x.payBackDate).valueOf()}
												date={moment(x.payBackDate).format("DD/MM/YYYY")}
											/>
										</td>
										<TableData name={x.status.name} />
										<TableActions
											approve={() => Approve(x.id)}
											reject={() => Reject(x.id)}
											aLoading={isLoading}
											rLoading={loading}
										/>
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

export default Requests;
