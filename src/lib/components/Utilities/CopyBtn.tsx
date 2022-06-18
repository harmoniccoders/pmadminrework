import { Box, Flex, Text } from "@chakra-ui/react";

export interface slipInfo {
	title: string;
	value: string;
}

function CopyBtn({ title, value }: slipInfo) {
	return (
		<Flex
			borderBottom="1px solid rgba(25,25,25,.06)"
			w="full"
			align="center"
			justify="space-between"
			h="4rem"
		>
			<Box>
				<Text
					fontSize="12px"
					fontWeight="medium"
					color="rgba(15,15,15,.5)"
					textTransform="capitalize"
				>
					{title}
				</Text>
				<Text
					fontSize="14px"
					fontWeight="medium"
					color="rgba(37,36,39,1)"
					textTransform="capitalize"
				>
					{value}
				</Text>
			</Box>
			<Flex
				bgColor="rgba(227,188,106,1)"
				borderRadius="3px"
				h="23px"
				w="55px"
				color="rgba(25,25,25,1)"
				fontSize="12px"
				justifyContent="center"
				alignItems="center"
				cursor="copy"
			>
				Copy
			</Flex>
		</Flex>
	);
}

export default CopyBtn;
