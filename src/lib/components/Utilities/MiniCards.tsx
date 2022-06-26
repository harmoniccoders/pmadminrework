import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export interface cardType {
	label: string;
	increase?: string;
	value: string | number | undefined;
}
function MiniCards({ label, increase, value }: cardType) {
	return (
		<Box
			bgColor="white"
			fontWeight="semibold"
			borderRadius="6px"
			boxShadow="0 2px 2px 0 rgba(0,0,0,0.12)"
			h="auto"
			py=".5rem"
		>
			<Flex justifyContent="space-between" alignItems="center" p="1rem">
				<Text fontSize="1rem">{label}</Text>
			</Flex>
			<Divider color="gray.50" />
			<Text fontSize="30px" p="1rem">
				{value}
			</Text>
		</Box>
	);
}

export default MiniCards;
