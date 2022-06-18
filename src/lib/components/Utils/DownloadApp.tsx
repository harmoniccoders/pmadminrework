import {
	Box,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Text,
} from "@chakra-ui/react";

function DownloadApp() {
	return (
		<Box
			bgColor="white"
			w="100%"
			h={["22rem", "20rem"]}
			pt={["2rem", "4rem"]}
			overflow="hidden"
		>
			<Grid
				templateColumns="repeat(3, 1fr)"
				w="85%"
				mx="auto"
				gap={6}
				display={["flex", "grid"]}
				flexDirection="column-reverse"
			>
				<GridItem>
					<Image src="/assets/phone.png" w="auto" objectPosition="top" />
				</GridItem>
				<GridItem mt={["0", "4rem"]}>
					<Text
						fontSize={["24px", "40px"]}
						textAlign={["center", "left"]}
						fontWeight="bold"
					>
						Liquede on the go!
					</Text>
					<Text fontSize={["14px", "20px"]} textAlign={["center", "left"]}>
						Download our Android or iOS app and take Liquede with you wherever
						you go.
					</Text>
				</GridItem>
				<GridItem mt={["0", "5rem"]}>
					<HStack spacing={4} justifyContent="space-between">
						<Image src="/assets/ios.png" w="45%" />
						<Image src="/assets/gpay.png" w="45%" />
					</HStack>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default DownloadApp;
