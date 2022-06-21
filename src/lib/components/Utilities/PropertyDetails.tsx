import {
	Box,
	Button,
	Flex,
	HStack,
	ListItem,
	Square,
	UnorderedList,
	VStack,
	Text,
	Image,
	Center,
	Heading,
	Grid,
	AspectRatio,
	GridItem,
	Icon,
	Divider,
} from "@chakra-ui/react";
import { PropertyView } from "Services";
import Features from "./Features";
import { SRLWrapper } from "simple-react-lightbox";
import parse from "html-react-parser";
import Icons from "./Icons";
import { MdVerified } from "react-icons/md";

const iconStyle = {
	color: "#0042ff",
};
function PropertyDetails({ data }: { data: PropertyView }) {
	return (
		<Box w="full">
			<Box
				pos="relative"
				h="200px"
				w="full"
				// overflow="hidden"
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
				<Box
					pos="absolute"
					minW="99px"
					h="24px"
					bgColor="rgba(227,188,106,1)"
					borderRadius="4px 0 0 4px"
					alignItems="center"
					justifyContent="center"
					display="flex"
					px=".5rem"
					top="20%"
					right="0"
				>
					<Text fontSize="12px" fontWeight="500">
						{data.lga}
					</Text>
				</Box>
			</Box>
			<Box
				overflow="hidden"
				p="1rem"
				w="90%"
				bg="white"
				borderRadius="4px"
				boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
				mx="auto"
				mt="-4rem"
				pos="relative"
				zIndex="2"
			>
				<VStack align="flex-start" spacing={4}>
					<Flex justifyContent="space-between" w="full">
						<Text
							fontSize="18px"
							fontWeight="700"
							w="60%"
							overflow="hidden"
							textOverflow="ellipsis"
						>
							{data.name}
						</Text>
						{!data.sellMyself ? (
							<Icon as={MdVerified} w="20px" h="20px" color="brand.100" />
						) : (
							<Icons iconClass="fa-exclamation-triangle" />
						)}
					</Flex>
					<Grid w="100%" templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)"]}>
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
								{data.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
					<Box>
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Description
						</Text>
						<Text fontSize="14px" lineHeight={1.5}>
							{parse(data.description as string)}
						</Text>
					</Box>
					<Box w="full">
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Pictures
						</Text>
						<>
							{data.mediaFiles && data.mediaFiles?.length > 0 ? (
								<HStack
									spacing={4}
									overflowX="auto"
									h="auto"
									pb="1rem"
									w="100%"
								>
									<>
										{data.mediaFiles?.map((media) => {
											return (
												<>
													{media.isImage && (
														<SRLWrapper>
															<Square size="157px" bg="gray" overflow="hidden">
																<Image
																	src={media.url as unknown as string}
																	alt="propery-image"
																	w="100%"
																	height="100%"
																	objectFit="cover"
																/>
															</Square>
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
					<Box w="full">
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Interactive 3D Tour
						</Text>
						<>
							{data.mediaFiles && data.mediaFiles?.length > 0 ? (
								<HStack
									spacing={4}
									overflowX="auto"
									h="auto"
									pb="1rem"
									w="100%"
								>
									<>
										{data.mediaFiles?.map((media) => {
											return (
												<>
													{media.isVideo && (
														<AspectRatio
															maxH={["70px", "150px"]}
															w="full"
															ratio={1}
														>
															<iframe
																title="Interactive videp"
																src={media.url as string}
																allowFullScreen
															/>
														</AspectRatio>
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
				</VStack>
			</Box>
		</Box>
	);
}

export default PropertyDetails;
