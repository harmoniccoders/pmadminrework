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
} from "@chakra-ui/react";
import Features from "./Features";

function PropertyDetails() {
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
				<Image src="" w="full" h="full" objectFit="cover" borderRadius="6px" />
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
						Lekki Phase 1
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
						<Text fontSize="16px" fontWeight="500" w="60%">
							4 Bedroom Terrace with Pool
						</Text>
						<Button
							bgColor="rgba(47,223,132,1)"
							width="73px"
							color="white"
							fontSize="14px"
							fontWeight="bold"
						>
							Enquire
						</Button>
					</Flex>
					<HStack justifyContent="space-between" w="full">
						<Features text="4 Bedrooms" icon="bed" />
						<Features text="5 Bathrooms" icon="shower" />
						<Features text="124 Sq ft" icon="tape" />
					</HStack>
					<Flex justifyContent="space-between" w="full">
						<Text fontSize="20px" fontWeight="600">
							₦145M
						</Text>
						<Flex align="center">
							<i
								className="fal fa-award"
								style={{
									paddingRight: ".8rem",
									fontSize: "12px",
									color: "rgba(227,188,106,1)",
								}}
							></i>
							<Text fontSize="14px" fontWeight="500">
								Governor’s Consent
							</Text>
						</Flex>
					</Flex>
					<Box>
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Description
						</Text>
						<UnorderedList fontSize="12px">
							<ListItem>Fully-fitted kitchen cabinets</ListItem>
							<ListItem>Complete Kitchen appliances</ListItem>
							<ListItem>Fully-fitted kitchen cabinets</ListItem>
							<ListItem>Complete Kitchen appliances</ListItem>
							<ListItem>Fully-fitted kitchen cabinets</ListItem>
							<ListItem>Complete Kitchen appliances</ListItem>
							<ListItem>Fully-fitted kitchen cabinets</ListItem>
							<ListItem>Complete Kitchen appliances</ListItem>
							<ListItem>Fully-fitted kitchen cabinets</ListItem>
							<ListItem>Complete Kitchen appliances</ListItem>
						</UnorderedList>
					</Box>
					<Box w="full">
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Pictures
						</Text>
						<HStack spacing={4} overflowX="auto" h="auto" pb="1rem" w="100%">
							<Square size="157px" bg="gray" overflow="hidden">
								<Image src="" w="full" h="full" objectFit="cover" />
							</Square>
							<Square size="157px" bg="gray" overflow="hidden">
								<Image src="" w="full" h="full" objectFit="cover" />
							</Square>
						</HStack>
					</Box>
					<Box w="full">
						<Text fontSize="14px" fontWeight="500" mb="1rem">
							Interactive 3D Tour
						</Text>
						<HStack spacing={4} overflowX="auto" h="auto" pb="1rem" w="100%">
							<Center w="100%" h="157px" bg="gray" overflow="hidden">
								<Image src="" w="full" h="full" objectFit="cover" />
							</Center>
						</HStack>
					</Box>
				</VStack>
			</Box>
		</Box>
	);
}

export default PropertyDetails;
