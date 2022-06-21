import {
	AspectRatio,
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Image,
	SimpleGrid,
	Square,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaCheck, FaChevronLeft, FaTrash } from "react-icons/fa";
import { PropertyView } from "Services";
import { LoginModel } from "types/AppTypes";
import ApplicationBox from "./ApplicationBox";
import parse from "html-react-parser";
import Naira from "./Naira";
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";
import Icons from "./Icons";
import { MdVerified } from "react-icons/md";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";
import { useToasts } from "react-toast-notifications";
import RejectProperty from "../Modals/RejectPropertyModal";

const iconStyle = {
	color: "#0042ff",
};
function SingleListings({ data }: { data: PropertyView }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const goBack = () => {
		router.back();
	};

	const { addToast } = useToasts();

	const [approveProperty, { loading: isLoading, data: isData, error }] =
		useOperationMethod("Adminpropertyapprove{propertyId}");

	const Approve = async () => {
		const params: Parameters = {
			propertyId: data.id as number,
		};

		try {
			const result = await (await approveProperty(params)).data;

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

	const [deleteProperty, { loading, data: dData, error: eError }] =
		useOperationMethod("Propertydelete{id}");

	const Delete = async () => {
		const params: Parameters = {
			id: data.id as number,
		};

		try {
			const result = await (await deleteProperty(params)).data;

			if (result.status) {
				addToast("Property Deleted Succesfully", {
					appearance: "success",
					autoDismiss: true,
				});
				router.push("/admin/listings/listings");
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
		<Box bgColor="white" p="1rem" minH="80vh" overflow="hidden">
			<HStack align="flex-start" spacing="2rem">
				<Box w="65%" pl="1rem" borderRight="1px solid #DCE1E7" pr="2rem">
					<Flex
						fontSize="14px"
						fontWeight="500"
						bgColor={data.sellMyself ? "#DCE1E7" : "brand.100"}
						borderRadius="4px"
						color={data.sellMyself ? "black" : "white"}
						px="1rem"
						height="1.5rem"
						justifyContent="center"
						align="center"
						w="fit-content"
					>
						{data.sellMyself ? "Self-sale" : "PropertyMataaz"}
					</Flex>
					<Flex align="center" my="1rem" cursor="pointer" onClick={goBack}>
						<FaChevronLeft fontSize="20px" />
						<Text fontSize="24px" fontWeight="bold" pl="1rem" mb="0 !important">
							{data.name}
						</Text>
					</Flex>
					<HStack mt="1rem" align="flex-start" spacing="1rem">
						<Box w="full">
							<ApplicationBox label="Property Name" detail={data.name} />
							<ApplicationBox
								label="Property Type"
								detail={data.propertyType}
							/>
							<ApplicationBox label="Legal Title" detail={data.title} />
							<ApplicationBox
								label="No of Bedrooms"
								detail={data.numberOfBedrooms}
							/>
							<ApplicationBox
								label="No of Toilets"
								detail={data.numberOfBathrooms}
							/>
							<ApplicationBox
								label="Price"
								detail={Naira(data.price as number)}
							/>
							<ApplicationBox label="State" detail={data.state} />
							<ApplicationBox label="Locality" detail={data.lga} />
							<ApplicationBox label="Area" detail={data.area} />
							<ApplicationBox
								label="Seller"
								detail={data.createdByUser?.fullName}
							/>
							<ApplicationBox
								label="Seller's Email"
								detail={data.createdByUser?.email}
							/>
							<ApplicationBox
								label="Seller's Mobile Number"
								detail={data.createdByUser?.phoneNumber}
							/>
						</Box>
						<Box w="full">
							<ApplicationBox label="Address" detail={data.address} />

							<ApplicationBox
								label="Details"
								detail={parse(data.description as string)}
							/>
							<Box w="100%" my="1rem" pl="1rem">
								<Heading fontSize="14px">Images</Heading>
								<>
									{data.mediaFiles && data.mediaFiles?.length > 0 ? (
										<Grid templateColumns="repeat(4,1fr)" gap={4}>
											<>
												{data.mediaFiles?.map((media) => {
													return (
														<>
															{media.isImage && (
																<SRLWrapper>
																	<Box
																		w="70px"
																		h="70px"
																		borderRadius="6px"
																		overflow="hidden"
																		bgColor="brand.50"
																	>
																		<Image
																			src={media.url as unknown as string}
																			alt="propery-image"
																			w="100%"
																			height="100%"
																			objectFit="cover"
																		/>
																	</Box>
																</SRLWrapper>
															)}
														</>
													);
												})}
											</>
										</Grid>
									) : (
										"No Images found"
									)}
								</>
							</Box>
							<Box w="100%" mb="1rem" pl="1rem">
								<Heading fontSize="14px">Videos</Heading>
								<>
									{data.mediaFiles && data.mediaFiles?.length > 0 ? (
										<Grid templateColumns="repeat(4,1fr)" gap={4}>
											<>
												{data.mediaFiles?.map((media) => {
													return (
														<>
															{media.isVideo && (
																<SRLWrapper>
																	<AspectRatio
																		maxH="70px"
																		w="70px"
																		ratio={1}
																		borderRadius="5px"
																		overflow="hidden"
																	>
																		<iframe
																			title="Interactive videp"
																			src={media.url as string}
																			allowFullScreen
																		/>
																	</AspectRatio>
																</SRLWrapper>
															)}
														</>
													);
												})}
											</>
										</Grid>
									) : (
										"No Video found"
									)}
								</>
							</Box>
							<Text
								color="black"
								fontSize="1.1rem"
								textAlign="left"
								fontWeight="semibold"
								px={5}
								my="1rem"
							>
								Bank Details
							</Text>
							<ApplicationBox label="Bank" detail={data.createdByUser?.bank} />
							<ApplicationBox
								label="Account Number"
								detail={data.createdByUser?.accountNumber}
							/>
						</Box>
					</HStack>
				</Box>
				<VStack spacing={6} w="35%">
					<HStack w="full" spacing={6} py="1rem">
						<Button
							bgColor="red"
							w="fit-content"
							px="3rem"
							onClick={onOpen}
							disabled={data.status !== "PENDING"}
						>
							Reject
						</Button>
						<Button
							bgColor="#4FE069"
							w="fit-content"
							px="2.6rem"
							isLoading={isLoading}
							onClick={Approve}
							disabled={data.status !== "PENDING"}
						>
							Approve
						</Button>
						<Text
							fontSize="14px"
							fontWeight="500"
							pl="1rem"
							onClick={Delete}
							cursor="pointer"
						>
							<HStack spacing={5}>
								{loading ? <div className="loader" /> : <FaTrash />}
							</HStack>
						</Text>
					</HStack>
					<Divider mt="1rem !important" />
					<Box my="2rem" w="full">
						<Text fontSize="1.1rem" mb="2rem" fontWeight="600">
							Preview
						</Text>
						<Box w="full">
							<Flex w="100%" pos="relative" flexDirection="column">
								<Box
									w="full"
									h="250px"
									pos="relative"
									borderRadius="6px"
									bgColor="gray"
								>
									<>
										{data.mediaFiles && data.mediaFiles?.length > 0 ? (
											<>
												{data.mediaFiles[0].isImage && (
													<Image
														src={data.mediaFiles[0].url as string}
														alt="propery-image"
														w="100%"
														height="100%"
														objectFit="cover"
													/>
												)}
											</>
										) : (
											<Image
												src="/assets/nb.webp"
												alt="propery-image"
												w="100%"
												height="100%"
												objectFit="cover"
											/>
										)}
									</>
									<Flex
										bg="brand.100"
										color="white"
										pos="absolute"
										w="fit-content"
										px="1.5rem"
										h="24px"
										top="18%"
										fontSize="14px"
										align="center"
										justify="center"
										borderRadius="4px 0 0 4px"
										right="0"
										textTransform="capitalize"
									>
										{data.area}
									</Flex>
								</Box>
								<Box
									overflow="hidden"
									p="1rem 1.5rem"
									w="90%"
									bg="white"
									borderRadius="5px 5px 0 0"
									boxShadow="0 2px 13px 0 rgba(0,0,0,0.03)"
									mx="auto"
									mt="-4rem"
									pos="relative"
									zIndex="2"
								>
									<Flex
										justify="space-between"
										// px=".8rem"
										my="1rem"
										w="full"
										alignItems="center"
									>
										<Text
											fontWeight={600}
											fontSize="16px"
											w="200px"
											whiteSpace="nowrap"
											overflow="hidden"
											textOverflow="ellipsis"
										>
											{data.name}
										</Text>

										{!data.sellMyself ? (
											<Icon
												as={MdVerified}
												w="20px"
												h="20px"
												color="brand.100"
											/>
										) : (
											<Icons iconClass="fa-exclamation-triangle" />
										)}
									</Flex>
									<Grid
										w="100%"
										templateColumns="repeat(2, 1fr)"
										margin="10px auto 15px"
										columnGap={3}
										rowGap={4}
										padding="10px 0"
									>
										<GridItem mb="5px" display="flex" alignItems="center">
											<Icons iconClass="fa-bed" style={iconStyle} />
											<Text fontSize="13px" ml="4px">
												{`${data.numberOfBedrooms} ${
													data.numberOfBedrooms
														? data.numberOfBedrooms > 1
															? "Bedrooms"
															: "Bedroom"
														: null
												}`}
											</Text>
										</GridItem>
										<GridItem mb="5px" display="flex" alignItems="center">
											<Icons iconClass="fa-toilet" style={iconStyle} />
											<Text fontSize="13px" ml="4px">
												{`${data.numberOfBathrooms} ${
													data.numberOfBathrooms
														? data.numberOfBathrooms > 1
															? "Bathrooms"
															: "Bathroom"
														: null
												}`}
											</Text>
										</GridItem>
										<GridItem mb="5px" display="flex" alignItems="center">
											<Icons iconClass="fa-tags" style={iconStyle} />
											<Text fontSize="13px" ml="4px">
												&#8358;
												{Naira(data.price as number)}
											</Text>
										</GridItem>
										<GridItem mb="5px" display="flex" alignItems="center">
											<Icons iconClass="fa-award" style={iconStyle} />
											<Text fontSize="13px" ml="4px">
												{data.title}
											</Text>
										</GridItem>
									</Grid>
									<Divider />
									<VStack align="flex-start" spacing={5} mt="3rem">
										<Box w="100%">
											<Heading fontSize="14px">Overview</Heading>

											{parse(data.description as string)}
										</Box>
										<Box w="100%">
											<Heading fontSize="14px">Pictures</Heading>
											<>
												{data.mediaFiles && data.mediaFiles?.length > 0 ? (
													<HStack spacing={4} overflow="auto">
														<>
															{data.mediaFiles?.map((media) => {
																return (
																	<>
																		{media.isImage && (
																			<SRLWrapper>
																				<Box
																					w={["70px", "150px"]}
																					h={["70px", "150px"]}
																					bgColor="brand.50"
																				>
																					<Image
																						src={media.url as unknown as string}
																						alt="propery-image"
																						w="100%"
																						height="100%"
																						objectFit="cover"
																					/>
																				</Box>
																			</SRLWrapper>
																		)}
																	</>
																);
															})}
														</>
													</HStack>
												) : (
													"No Images found"
												)}
											</>
										</Box>

										<Box w="100%">
											<Heading fontSize="14px">Video</Heading>
											<>
												{data.mediaFiles && data.mediaFiles?.length > 0 ? (
													<HStack>
														<>
															{data.mediaFiles?.map((media) => {
																return (
																	<>
																		{media.isVideo && (
																			<SRLWrapper>
																				<AspectRatio
																					maxH={["70px", "150px"]}
																					w={["70px", "280px"]}
																					ratio={1}
																				>
																					<iframe
																						title="Interactive videp"
																						src={media.url as string}
																						allowFullScreen
																					/>
																				</AspectRatio>
																			</SRLWrapper>
																		)}
																	</>
																);
															})}
														</>
													</HStack>
												) : (
													"No Videos found"
												)}
											</>
										</Box>
									</VStack>
								</Box>
							</Flex>
						</Box>
					</Box>
					<RejectProperty data={data} onClose={onClose} isOpen={isOpen} />
				</VStack>
			</HStack>
		</Box>
	);
}

export default SingleListings;
