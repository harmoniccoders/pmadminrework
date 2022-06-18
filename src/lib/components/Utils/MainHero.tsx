import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

export type propTypes = {
	main: string;
	submain: string;
	shortinfo: string;
	height: any;
	img: string;
};

function MainHero({ main, submain, shortinfo, height, img }: propTypes) {
	return (
		<Stack
			direction={["column", "row"]}
			align="center"
			justifyContent="flex-start"
		>
			<Box w={["full", "60%"]} h={["15rem", "30rem"]} zIndex={1}>
				<Image src={img} w="full" h="full" objectFit="cover" />
			</Box>
			<Flex
				w={["full", "40%"]}
				ml={["0", "-10% !important"]}
				mt={["-26% !important", " 0 !important"]}
				h={height}
				bg="rgba(255,255,255,0.7)"
				align="center"
				pl={["1rem", "5rem"]}
				pr={["1rem", "1.5rem"]}
				zIndex={2}
			>
				<Box w="full">
					<Flex
						flexWrap="wrap"
						alignItems="baseline"
						justifyContent={["center", "flex-start"]}
					>
						<Text
							fontSize={["35px", "70px"]}
							color="black"
							fontWeight="semibold"
							pr="1rem"
							lineHeight="1"
						>
							{main}
						</Text>
						<Text
							fontSize={["30px", "45px"]}
							fontWeight="medium"
							textAlign={["center", "left"]}
							lineHeight="1"
						>
							{submain}
						</Text>
					</Flex>
					<Text
						fontSize={["1rem", "20px"]}
						fontWeight="400"
						textAlign={["justify", "left"]}
						my={["1rem", "1.5rem"]}
					>
						{shortinfo}
					</Text>
					<Button w={["full", "18rem"]}>Get Liquede</Button>
				</Box>
			</Flex>
		</Stack>
	);
}

export default MainHero;
