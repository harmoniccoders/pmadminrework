import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

function CardAd() {
	return (
		<Box w={["90%", "81%"]} pos="relative" mb="3rem !important">
			<Box w={["full", "380px"]} h={["21rem", "18rem"]} bg="brand.300" />
			<Flex
				w="100%"
				mx="auto"
				bgColor="black"
				h={["auto", "18rem"]}
				pl={["1rem", "2rem"]}
				pr="1rem"
				py="1rem"
				pos="absolute"
				top={["5%", "16%"]}
				left={["0", "4%"]}
				justify="space-between"
				alignItems="center"
				flexDirection={["column", "row"]}
			>
				<Box>
					<Text
						color="brand.300"
						fontSize={["1rem", "50px"]}
						fontWeight="bold"
						textAlign={["center", "left"]}
					>
						Get the SLIPCARD
					</Text>
					<Text
						color="white"
						fontSize={["13px", "30px"]}
						fontWeight="medium"
						mb={["1rem", "3rem"]}
						textAlign={["center", "left"]}
					>
						Access instant credit without a credit card
					</Text>
					<Button
						bgColor="transparent"
						border="2px solid white"
						px={["30px", "48px"]}
						py={["12px", "16px"]}
						h="auto"
						w={["full", "auto"]}
						color="white"
						fontSize={["12px", "14.5px"]}
						fontWeight="bold"
					>
						Get Liquede
					</Button>
				</Box>
				<Box>
					<Image src="/assets/slipcard.png" w="auto" />
				</Box>
			</Flex>
		</Box>
	);
}

export default CardAd;
