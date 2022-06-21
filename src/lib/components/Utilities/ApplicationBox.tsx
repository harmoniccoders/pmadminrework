import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";

interface AppProps {
	label: string;
	detail: any;
}
const ApplicationBox = ({ label, detail }: AppProps) => {
	return (
		<Box>
			<FormLabel
				htmlFor={label}
				textTransform="capitalize"
				pos="relative"
				top={5}
				left={4}
				width="fit-content"
				zIndex={3}
				bg="white"
				px=".5rem"
				fontSize="14px"
			>
				{label}
			</FormLabel>
			<Flex
				bgColor="white"
				w="full"
				minH="1rem"
				borderRadius="5px"
				px="1.5rem"
				alignItems="center"
				border="1px solid #DCE1E7"
				py="1rem"
			>
				<Text>{detail}</Text>
			</Flex>
		</Box>
	);
};

export default ApplicationBox;
