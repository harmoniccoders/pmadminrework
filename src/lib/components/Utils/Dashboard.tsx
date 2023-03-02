import {
	Box,
	Circle,
	Divider,
	Flex,
	GridItem,
	ListItem,
	OrderedList,
	Select,
	SimpleGrid,
	Square,
	Text,
	Image,
	VStack,
	HStack,
} from "@chakra-ui/react";
import React from "react";
import { MetricsView, Transaction, UserView } from "Services";
import Icons from "../Utilities/Icons";
import LineChart from "../Utilities/LineChart";
import MiniCards from "../Utilities/MiniCards";
import Naira from "../Utilities/Naira";

interface DashboardProps {
	data: MetricsView;
	users: UserView[];
	trans: any;
}
function Dashboard({ data, users, trans }: DashboardProps) {
	return (
		<VStack spacing="2rem" align="flex-start">
			<Box w="full">
				<SimpleGrid columns={3} gap="1rem" mt="2rem">
					<GridItem colSpan={1}>
						<MiniCards label="All Users" value={data.users} />
					</GridItem>
					<GridItem colSpan={1}>
						<MiniCards label="Active Users" value={data.activeUsers} />
					</GridItem>
					<GridItem colSpan={1}>
						<MiniCards label="New Users" value={data.newUsers} />
					</GridItem>
				</SimpleGrid>
			</Box>
			<Box w="full">
				<Flex justifyContent="space-between" mb="1rem">
					<Text fontSize="1.3rem" fontWeight="bold" pl="1rem">
						Revenue
					</Text>
				</Flex>
				<SimpleGrid columns={6} gap="1rem">
					<GridItem colSpan={6}>
						<Box
							bgColor="white"
							fontWeight="semibold"
							borderRadius="6px"
							boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
							h="30rem"
							padding="1rem 2rem"
						>
							<Flex justifyContent="space-between" mb=".5rem">
								<Text fontSize="12px">Income Value</Text>
							</Flex>
							<Box width="full" h="25rem" pt="1rem">
								<LineChart charts={trans} />
							</Box>
						</Box>
					</GridItem>
					<GridItem colSpan={2} display="none">
						<Box
							bgColor="white"
							fontWeight="semibold"
							borderRadius="6px"
							boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
							h="10rem"
							padding="1rem"
						>
							<Flex justifyContent="space-between" mb=".5rem">
								<Text fontSize="12px">Active Users</Text>
							</Flex>
							<Box width="full" h="6rem"></Box>
						</Box>
					</GridItem>
				</SimpleGrid>
			</Box>
			<Box w="full">
				<SimpleGrid columns={3} gap="1rem">
					<GridItem colSpan={1}>
						<Box
							bgColor="white"
							fontWeight="semibold"
							borderRadius="6px"
							boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
							minH="10rem"
						>
							<Flex
								justifyContent="space-between"
								mb=".5rem"
								alignItems="center"
								padding="1.5rem 1rem .4rem"
							>
								<Text fontSize="1rem">Users</Text>
								<Select placeholder="Value" w="45%">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Flex>
							<Divider />
							<OrderedList p="1rem" spacing="1rem">
								{users?.map((user: UserView, i: any) => (
									<ListItem textTransform="capitalize" key={i}>
										<Flex alignItems="center">
											<Circle
												bgColor="brand.100"
												color="white"
												size="3rem"
												mx="1rem"
												overflow="hidden"
												textTransform="uppercase"
											>
												{user.profilePicture ? (
													<Image
														src={user.profilePicture}
														w="full"
														objectFit="cover"
														h="full"
													/>
												) : (
													<>
														{user.firstName?.charAt(0)}
														{user.lastName?.charAt(0)}
													</>
												)}
											</Circle>
											<Box>
												<Text fontSize=".9rem">{user.fullName}</Text>
												<Text fontSize="10px" fontWeight="medium">
													{user.phoneNumber}
												</Text>
											</Box>
										</Flex>
									</ListItem>
								))}
							</OrderedList>
						</Box>
					</GridItem>
					<GridItem colSpan={1}>
						<Box
							bgColor="white"
							fontWeight="semibold"
							borderRadius="6px"
							boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
							minH="10rem"
						>
							<Flex
								justifyContent="space-between"
								mb=".5rem"
								alignItems="center"
								padding="1.5rem 1rem .4rem"
							>
								<Text fontSize="1rem">Transactions</Text>
								<Select placeholder="Value" w="45%">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Flex>
							<Divider />
							<OrderedList p="1rem" spacing="1rem">
								{trans.map((tran: Transaction, i: any) => (
									<ListItem key={i}>
										<Flex alignItems="center">
											<Square
												bgColor="brand.700"
												color="white"
												size="3rem"
												mx="1rem"
												overflow="hidden"
												borderRadius="6px"
												// display="none"
											>
												{tran.property?.isForRent ? (
													<Icons iconClass="fa-house-leave" />
												) : tran.property?.isForSale ? (
													<Icons iconClass="fa-bags-shopping" />
												) : tran.property?.isRequest ? (
													<Icons iconClass="fa-map-marker-question" />
												) : (
													<Icons iconClass="fa-credit-card-front" />
												)}

												{/* <Image src="" objectFit="cover" /> */}
											</Square>
											<Box>
												<Text fontSize=".9rem">
													{tran.property?.isForSale
														? "Buy"
														: tran.property?.isForRent
														? "Rent"
														: tran.property?.isRequest
														? "Request"
														: "Others"}
												</Text>
												<Text fontSize=".5rem">
													{Naira(tran.amount as unknown as number)}
												</Text>
											</Box>
										</Flex>
									</ListItem>
								))}
							</OrderedList>
						</Box>
					</GridItem>
					<GridItem colSpan={1}>
						<Box
							bgColor="white"
							fontWeight="semibold"
							borderRadius="6px"
							boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
							minH="10rem"
						>
							<Flex
								justifyContent="space-between"
								mb=".5rem"
								alignItems="center"
								padding="1.5rem 1rem .4rem"
							>
								<Text fontSize="1rem">Location</Text>
								<Select placeholder="Value" w="45%">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Flex>
							<Divider />
							<OrderedList p="1rem" spacing="1rem">
								{trans.map((tran: Transaction, i: any) => (
									<ListItem key={i}>
										<Flex alignItems="center">
											<Circle
												bgColor="brand.100"
												color="white"
												size="3rem"
												mx="1rem"
											>
												<i
													className="fas fa-map-pin"
													style={{ color: "white", fontSize: "1.3rem" }}
												></i>
											</Circle>
											<Box>
												<Text fontSize=".9rem">{tran.property?.state}</Text>
												<Text fontSize="10px" fontWeight="medium">
													928328899
												</Text>
											</Box>
										</Flex>
									</ListItem>
								))}
							</OrderedList>
						</Box>
					</GridItem>
				</SimpleGrid>
			</Box>
		</VStack>
	);
}

export default Dashboard;
