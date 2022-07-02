import {
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	TableContainer,
	Tbody,
	Tr,
	Table,
	Thead,
	Divider,
} from "@chakra-ui/react";
import AddMatch from "lib/components/Modals/AddMatchModal";
import RequestStatus from "lib/components/Modals/RequestStatus";
import NameTag from "lib/components/NameTag";
import Naira from "lib/components/Utilities/Naira";
import {
	TableData,
	TableDelete,
	TableHead,
} from "lib/components/Utilities/Tables";
import TimeDisplay from "lib/components/Utilities/TimeDisplay";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";
import { useToasts } from "react-toast-notifications";
import { PropertyRequestMatchView } from "Services";

function RequestSingle({ data, propertyTitles, propertyTypes }: any) {
	const matches = data.matches;

	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const [isMatchOpen, setIsMatchOpen] = useState(false);
	const openMatchModal = () => {
		setIsMatchOpen(true);
	};
	const closeMatchModal = () => {
		setIsMatchOpen(false);
	};
	const { addToast } = useToasts();

	function DeleteItem(d: any) {
		const [removeMatch, { loading, data: isData, error }] = useOperationMethod(
			"PropertyRequestmatchremove{matchId}"
		);

		const DeleteMatch = async (match: any) => {
			const params: Parameters = {
				matchId: match,
			};

			try {
				const result = await (await removeMatch(params)).data;

				if (result.status) {
					addToast(result.message, {
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
			<TableDelete
				onClick={() => {
					DeleteMatch(d);
				}}
				loading={loading}
			/>
		);
	}
	return (
		<Box bgColor="white" px="2rem" minH="80vh">
			<HStack align="flex-start" h="full">
				<Box w="30%" borderRight="1px solid #d4d4d4" h="90vh">
					<Flex
						align="center"
						my="1rem"
						cursor="pointer"
						onClick={goBack}
						py="1rem"
					>
						<FaChevronLeft fontSize="20px" />
						<Text
							fontSize="24px"
							fontWeight="bold"
							pl="1rem"
							mb="0 !important"
							textTransform="capitalize"
							noOfLines={1}
						>
							{`${
								data.numberOfBedRooms
							} Bedroom ${data.propertyType.name.toLowerCase()}`}
						</Text>
					</Flex>
					<Flex w="100%" justify="space-between">
						<VStack spacing="1rem" alignItems="flex-start">
							<NameTag
								title="User"
								name={`${data?.user?.firstName} ${data?.user?.lastName}`}
							/>
							<NameTag title="State" name={data.state} />
							<NameTag title="Locality" name={data.lga} />
							<NameTag title="Area" name={data?.area || "-"} />
							<NameTag title="Budget" name={Naira(data.budget)} />
							<NameTag
								title="Payment Status"
								name={data.status.toLowerCase()}
							/>
						</VStack>
					</Flex>
				</Box>
				<Box w="70%" mt="1rem !important" py="1rem">
					<Flex justify="space-between">
						<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
							Matches
						</Text>
						<HStack spacing="1.5rem" alignItems="flex-start">
							<Box w="180px" onClick={openModal}></Box>
							<Box w="180px" onClick={openMatchModal}>
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
									Add a Match
								</Flex>
							</Box>
						</HStack>
					</Flex>
					<Box
						w="full"
						minH="500px"
						bgColor="white"
						// boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
						borderRadius="5"
						p=" 1.5rem 0 1rem"
					>
						{matches.length > 0 ? (
							<>
								<TableContainer h="500px" overflowY="hidden">
									<Table variant="simple">
										<Thead>
											<Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
												<TableHead title="Name" />
												<TableHead title="Location" />
												<TableHead title="Area" />
												<TableHead title="State" />
												<TableHead title="Price" />
												<TableHead title="Status" />
												<TableHead title="" />
											</Tr>
										</Thead>
										<Tbody>
											{matches.map((match: PropertyRequestMatchView) => {
												return (
													<>
														<Tr key={match.id}>
															<TableData
																name={match.property?.name as string}
															/>
															<TableData
																name={match.property?.area as string}
															/>
															<TableData name={match.property?.lga as string} />
															<TableData
																name={match.property?.state as string}
															/>
															<TableData
																name={Naira(
																	match.property?.price as unknown as number
																)}
															/>
															<TableData
																name={(
																	match.property?.status as string
																).toLowerCase()}
															/>
															<DeleteItem d={match.id} />
														</Tr>
													</>
												);
											})}
										</Tbody>
									</Table>
								</TableContainer>
							</>
						) : (
							<Flex height="500px" justify="center" align="center">
								<Text fontSize="24px" color="rgba(0,0,0,.3)" fontWeight="600">
									No matches added yet
								</Text>
							</Flex>
						)}
					</Box>
				</Box>
			</HStack>
			<AddMatch
				isOpen={isMatchOpen}
				onClose={closeMatchModal}
				propertyTypes={propertyTypes}
				propertyTitles={propertyTitles}
				item={data}
			/>
		</Box>
	);
}

export default RequestSingle;
